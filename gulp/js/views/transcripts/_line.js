app.views.TranscriptLine = app.views.Base.extend({

  template: _.template(TEMPLATES['transcript_line.ejs']),

  events: {
    "click": "select",
    "click .star": "star",
    "click .flag": "flag",
    "click .verify": "verify",
    "click .speaker-option": "selectSpeaker"
  },

  initialize: function(data){
    this.data = _.extend({}, data);
    this.line = this.data.line || {};
    this.edits = this.data.edits || [];
    this.speakers = this.data.speakers || [];
    this.render();
  },

  flag: function(e){
    e.preventDefault();
    $(e.currentTarget).toggleClass('active');
  },

  loadEdits: function(onSuccess){
    var _this = this;
    $.getJSON("/transcript_edits.json", {transcript_line_id: this.line.id}, function(data) {
      if (data.length) {
        _this.edits = _this.parseEdits(data);
        onSuccess && onSuccess();
      }
    });
  },

  parseEdits: function(_edits){
    var line = this.line,
        edits = [],
        texts = [];

    _.each(_edits, function(edit, i){
      if (!_.contains(texts, edit.text)) {
        if (line.user_text == edit.text) {
          edit.active = true;
        }
        texts.push(edit.text);
        edits.push(edit);
      }
    });

    return edits;
  },

  render: function(){
    this.$el.html(this.template(_.extend({},this.line,{speakers: this.speakers})));
  },

  select: function(e){
    e && e.preventDefault();
    PubSub.publish('transcript.line.select', this.line);

    // invoke verify task if reviewing
    if (e && !$(e.currentTarget).hasClass('verify') && this.line.status.name == 'reviewing' && !this.line.is_editable) {
      this.verify();
    }

  },

  selectSpeaker: function(e){
    e.preventDefault();

    var $option = $(e.currentTarget),
        speaker_id = parseInt($option.attr('data-id')),
        old_speaker_id = this.line.speaker_id;

    this.$('.speaker-option, .speaker').removeClass('selected');

    // didn't change, unselect
    if (speaker_id == old_speaker_id) {
      this.line.speaker_id = 0;

    // new speaker selection
    } else {
      this.line.speaker_id = speaker_id;
      $option.addClass('selected');
      this.$('.speaker').addClass('selected');
    }

    var data = {transcript_id: this.data.transcript_id, transcript_line_id: this.line.id, speaker_id: this.line.speaker_id};

    // save speaker
    $.post(API_URL + "/transcript_speaker_edits.json", {transcript_speaker_edit: data}, function(resp) {
      // console.log('Changes saved.')
    });
  },

  star: function(e){
    e.preventDefault();
    $(e.currentTarget).toggleClass('active');
  },

  verify: function(e){
    e && e.preventDefault();
    this.select();

    var _this = this;

    if (!this.edits.length) {
      this.loadEdits(function(){
        _this.verify();
      });
      return false;
    }

    PubSub.publish('transcript.edits.load', {
      edits: this.edits,
      line: this.line
    });
  }

});
