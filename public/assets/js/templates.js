window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["header_title.ejs"] = '<% if (project.logo) { %>  <a href="/" title="<%= project.name %>" class="title" aria-label="Click to return to homepage" title="Click to return to homepage"><img src="<%= project.logo %>" alt="Logo" class="logo" /></a><% } else { %>  <h1 class="title" aria-label="Click to return to homepage" title="Click to return to homepage"><a href="/"><%= project.name %></a></h1><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["admin_flag_item.ejs"] = '<td class="type"><%= flag_type_label %></td><td class="text"><%= text %></td><td class="email"><a href="/transcripts/<%= transcript_uid %>" target="_blank"><%= transcript_title %></a></td><td class="lines_edited"><a href="/transcripts/<%= transcript_uid %>?t=<%= UTIL.formatTime(start_time/1000) %>" target="_blank"><%= UTIL.formatTime(start_time/1000) %></a></td>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["admin_flags.ejs"] = '<h2>Unresolved Flags</h2><table class="flags-table">  <thead>    <tr>      <th>Type</th>      <th>Note</th>      <th>Transcript</th>      <th>Line</th>    </tr>  </thead>  <tbody id="flags-container">  </tbody></table>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["admin_stats.ejs"] = '<% _.each(stats, function(stat){ %>  <div class="stat">    <h2><%= stat.label %></h2>    <div class="sums">      <% _.each(stat.sums, function(sum){ %>        <div class="sum">          <div class="sum-label"><%= sum.label %></div>          <div class="sum-value"><%= UTIL.formatNumberTiny(sum.value) %></div>        </div>      <% }) %>    </div>  </div><% }) %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["admin_user_item.ejs"] = '<td class="image"><img src="<%= image %>" /></td><td class="name"><%= name %></td><td class="email"><%= email %></td><td class="lines_edited"><%= lines_edited %></td>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["admin_users.ejs"] = '<h2>Top Users</h2><table class="users-table">  <thead>    <tr>      <th>  </th>      <th>Name</th>      <th>Email</th>      <th>Edits Made</th>    </tr>  </thead>  <tbody id="users-container">  </tbody></table>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["user_dashboard.ejs"] = '<div class="dashboard page">  <h2>Your Recent Activity</h2>  <% if (transcripts.length <= 0) { %>    <p class="highlight">You don\'t have any transcript edits yet!</p>  <% } else { %>    <p>You have edited <strong><%= edit_count %></strong> lines in <strong><%= transcripts.length %></strong> transcripts and listened to about <strong><%= UTIL.formatTimeAlt(seconds_edited) %></strong> of audio!</p>    <div class="dashboard-transcript-list" role="list">    <% _.each(transcripts, function(transcript){ %>      <div class="dashboard-transcript" role="listitem">        <div class="transcript-info">          <a href="<%= transcript.path %>">            <% if (transcript.image_url) { %><img src="<%= transcript.image_url %>" alt="Image of <%= transcript.title %>" /><% } %>            <%= transcript.title %>          </a>        </div>        <div class="transcript-stats">          <div class="stat">            <div class="stat-label">Lines edited:</div>            <div class="stat-value"><%= transcript.edit_count %></div>          </div>          <div class="stat">            <div class="stat-label">Listened to:</div>            <div class="stat-value small">~<%= UTIL.formatTimeAlt(transcript.seconds_edited) %> of audio</div>          </div>        </div>        <div class="transcript-edits">          <% _.each(transcript.edits, function(edit){ %>            <div class="transcript-edit"><%= edit.text %></div>          <% }) %>        </div>      </div>    <% }) %>    </div>  <% } %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["account.ejs"] = '<% if (user.signedIn) { %>  <div class="select">    <div class="select-active" title="Signed in as <%= user.name %>"><span class="score<%= score > 0 ? \' active\':\'\' %>"><%= UTIL.formatNumberTiny(score) %></span> <%= user.name %></div>    <div class="select-options account-menu menu" role="menu" aria-hidden="true" aria-label="User account menu">      <a href="/dashboard" class="select-option menu-item" role="menuitem">Dashboard</a>      <% if (user.user_role_id > 1) { %>        <a href="/admin" class="select-option menu-item" role="menuitem">Admin</a>      <% } %>      <a href="#sign-out" class="sign-out-link select-option menu-item" role="menuitem">Sign out</a>    </div>  </div><% } else { %>  <div class="select">    <div class="select-active"><span class="score<%= score > 0 ? \' active\':\'\' %>"><%= UTIL.formatNumberTiny(score) %></span> <span id="sign-in-label" class="sign-in-copy">Track My Progress</span></div>    <div class="select-options account-menu menu" role="menu" aria-hidden="true" aria-labelledby="sign-in-label">      <% _.each(project.authProviders, function(provider) { %>        <a href="#sign-in-with-<%= provider.name %>" data-provider="<%= provider.name %>" class="auth-link select-option menu-item" data-active="Signing In..." role="menuitem">Sign in w/ <%= provider.label %></a>      <% }) %>    </div>  </div><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["crumbs.ejs"] = '<% _.each(crumbs, function(crumb){ %>  <% if (crumb.url) { %>    <a href="<%= crumb.url %>" class="crumb">  <% } else { %>    <div class="crumb">  <% } %>    <% if (crumb.image) { %>      <div class="crumb-image"><img src="<%= crumb.image %>" alt="<%= crumb.label %> Icon" /></div>    <% } %>    <div class="crumb-label"<%= crumb.title ? \' title="\'+crumb.title+\'"\' : \'\' %>><%= crumb.label %></div>  <% if (crumb.url) { %>    </a>  <% } else { %>    </div>  <% } %><% }) %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["menu.ejs"] = '<div class="<%= menu_key %>-menu menu" role="menu">  <% _.each(menu, function(item) { %>    <% if (!item.validRoutes || item.validRoutes.indexOf(route.route) > -1) { %>      <% if (item.modal) { %>        <a <%= item.url ? \'href="\'+item.url+\'"\' : \'\' %> data-modal="<%= item.modal %>" class="menu-item modal-invoke" role="menuitem"><%= item.label %></a>      <% } else { %>        <a href="<%= item.url %>" class="menu-item <%= item.url==route.path ? \'active\': \'\' %>"<%= item.target ? \' target="\'+item.target+\'"\' : \'\' %> role="menuitem"><%= item.label %></a>      <% } %>    <% } %>  <% }) %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["modal.ejs"] = '<section class="modal <%= active ? \'active\': \'\' %>" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">  <div class="modal-inner">    <% if (hasOwnProperty("title")) { %>      <header id="modal-label"><%= title %></header>    <% } %>    <div class="modal-content">      <% _.each(pages, function(page, i){ %>        <div class="modal-page <%= page.file ? page.file : \'\' %> <%= active_page==i ? \'active\': \'\' %>" role="tabpanel" aria-labelledby="modal-tab-link-<%= i %>">          <%= page.contents %>        </div>      <% }) %>    </div>    <% if (pages.length > 1) { %>      <div class="modal-tabs" role="tablist">        <% _.each(pages, function(page, i){ %>          <a id="modal-tab-link-<%= i %>" href="#tab-<%= i %>" class="modal-tab <%= active_page==i ? \'active\': \'\' %>" data-tab="<%= i %>" role="tab"><%= i+1 %>. <%= page.label %></a>        <% }) %>      </div>    <% } %>    <footer>      <% if (active_page > 0) { %>        <a href="#previous" class="button modal-tab" data-tab="<%= active_page-1 %>" role="button">Previous</a>      <% } %>      <% if (active_page >= pages.length-1) { %>        <a href="#done" class="button pull-right modal-dismiss" role="button"><%= hasOwnProperty("doneLabel") ? doneLabel : "Finished" %></a>      <% } else if (pages.length > 1) { %>        <a href="#next" class="button pull-right modal-tab" data-tab="<%= active_page+1 %>" role="button">Next</a>      <% } %>    </footer>  </div>  <a href="#close" class="modal-close modal-dismiss" title="Close this modal" aria-label="Close" role="button">x</a></section>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["page.ejs"] = '<div class="<%= page_key %> page">  <%= content %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_edit.ejs"] = '<% if (page_conventions) { %><div id="conventions-page" class="conventions-page sticky">  <div role="tabpanel" aria-labelledby="conventions-link" aria-hidden="true">  <%= page_conventions %>  </div>  <a id="conventions-link" href="#conventions" class="tab toggle-active conventions-link" data-target="#conventions-page" label-active="Hide Conventions" label-inactive="Show Conventions" role="tab" aria-label="Conventions"></a></div><% } %><div class="transcript-header<%= transcript.image_url ? \' has-image\' : \'\' %>" role="banner">  <% if (transcript.image_url) { %>    <div class="image" style="background-image: url(<%= transcript.image_url %>)"></div>  <% } %>  <div class="metadata">    <h1><%= transcript.title %></h1>    <% if (transcript.description) { %>      <p><%= transcript.description %></p>    <% } %>    <p class="duration">Duration: <%= UTIL.formatTimeAlt(transcript.duration) %></p>    <% if (transcript.url) { %>      <p class="original-link"><a href="<%= transcript.url %>" target="_blank">Listen to the original audio</a></p>    <% } %>    <% if (transcript.speakers.length) { %>      <p class="speakers">Participants: <%= _.pluck(transcript.speakers, \'name\').join(\', \') %> </p>    <% } %>  </div>  <% if (transcript.percent_edited > 0) { %>  <div class="status-wrapper">    <% if (transcript.users_contributed > 0) { %>      <div class="status-contributors">        <%= UTIL.formatNumber(transcript.users_contributed) %> contributor<%= transcript.users_contributed == 1 ? \'\' : \'s\' %>        <%= transcript.users_contributed == 1 ? \'has\' : \'have\' %> edited <%= UTIL.formatNumber(transcript.lines_edited) %> line<%= transcript.lines_edited == 1 ? \'\' : \'s\' %>      </div>    <% } %>    <div class="item-status">      <div class="item-status-bar edited" style="width: <%= transcript.percent_edited %>%"></div>      <% if (transcript.percent_completed > 0) { %>        <div class="item-status-bar completed" style="width: <%= transcript.percent_completed %>%"></div>      <% } %>      <% if (transcript.percent_reviewing > 0) { %>        <div class="item-status-bar reviewing" style="width: <%= transcript.percent_reviewing %>%; left: <%= transcript.percent_completed %>%;"></div>      <% } %>    </div>    <div class="item-status-key">      <% if (transcript.percent_completed > 0) { %>        <div class="item-status-text completed"><%= transcript.percent_completed %>% of lines reached consensus</div>      <% } %>      <% if (transcript.percent_reviewing > 0) { %>        <div class="item-status-text reviewing"><%= transcript.percent_reviewing %>% of lines awaiting review</div>      <% } %>      <% if ((transcript.percent_edited-transcript.percent_reviewing-transcript.percent_completed) > 0) { %>        <div class="item-status-text edited"><%= transcript.percent_edited - transcript.percent_reviewing - transcript.percent_completed %>% of lines have edits</div>      <% } %>    </div>  </div>  <% } %></div><div role="main">  <% if (page_content) { %>  <div class="transcript-page" role="contentinfo">    <%= page_content %>  </div>  <% } %>  <div id="transcript-user-progress" class="transcript-user-progress">    <div class="progress-content"></div>    <a href="#toggle" class="progress-toggle" title="Toggle Progress Display"></a>  </div>  <div id="transcript-lines" class="transcript-lines<%= transcript.speakers && transcript.speakers.length > 1 ? \' has-speakers\' : \'\' %>"></div>  <% if (completion_content) { %>  <div id="completion-content" class="completion-content" aria-hidden="true">    <%= completion_content %>  </div>  <% } %></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_facets.ejs"] = '<% if (collections.length > 2) { %>  <div class="facet">    <label for="filter-by-collection">Filter by Collection: </label>    <div name="filter-by-collection" class="select collection">      <div class="select-active"><%= active_collection.title %></div>      <div class="select-options" role="menu" aria-hidden="true">        <% _.each(collections, function(collection) { %>          <a data-filter="collection_id" data-value="<%= collection.id %>" class="select-option filter-by <%= active_collection.id == collection.id ? \'selected\' : \'\' %>" data-active="<%= collection.title %>" title="<%= collection.title %><%= collection.description ? \': \'+collection.description : \'\' %>" role="menuitemradio" aria-checked="<%= active_collection.id == collection.id ? \'true\' : \'false\' %>"><%= collection.title %></a>        <% }) %>      </div>    </div>  </div><% } %><div class="facet">  <label for="sort-by">Sort by: </label>  <div name="sort-by" class="select sort">    <div class="select-active"><%= active_sort.label %></div>    <div class="select-options" role="menu" aria-hidden="true">      <% _.each(sort_options, function(sort) { %>        <a data-sort="<%= sort.name %>" data-order="<%= sort.order %>" class="select-option sort-by <%= active_sort.id == sort.id ? \'selected\' : \'\' %>" data-active="<%= sort.label %>" title="<%= sort.label %>" role="menuitemradio" aria-checked="<%= active_sort.id == sort.id ? \'true\' : \'false\' %>"><%= sort.label %></a>      <% }) %>    </div>  </div></div><div class="facet">  <form id="search-form" class="search-form" role="search">    <input name="keyword" value="<%= active_keyword %>" placeholder="Search Title/Description" />    <button type="submit" class="submit" title="Submit" aria-label="Submit"></button>  </form></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_index.ejs"] = '<div data-sticky="#transcript-facets" class="sticky-on-scroll">  <div id="transcript-facets" class="transcript-facets">  </div></div><div id="transcript-results" class="transcript-results"></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_item.ejs"] = '<div class="item-image" style="background-image: url(<%= image_url %>)"></div><% if (collection_title) { %>  <div class="item-subtitle"><%= collection_title %></div><% } %><div class="item-title"><%= title %></div><% if (description) { %>  <div class="item-description"><%= description %></div><% } %><div class="item-info">  <%= UTIL.formatTimeAlt(duration) %>  <% if (users_contributed > 0) { %>    <div class="item-contributors">      <%= UTIL.formatNumberTiny(users_contributed,0) %> contributor<%= users_contributed == 1 ? \'\' : \'s\' %>    </div>  <% } %></div><% if (percent_edited > 0) { %><div class="item-status">  <div class="item-status-bar edited" style="width: <%= percent_edited %>%"></div>  <% if (percent_completed > 0) { %>    <div class="item-status-bar completed" style="width: <%= percent_completed %>%"></div>  <% } %>  <% if (percent_reviewing > 0) { %>    <div class="item-status-bar reviewing" style="width: <%= percent_reviewing %>%; left: <%= percent_completed %>%;"></div>  <% } %></div><div class="item-status-key">  <% if (percent_completed > 0) { %>    <div class="item-status-text completed"><%= percent_completed %>% reached consensus</div>  <% } %>  <% if (percent_reviewing > 0) { %>    <div class="item-status-text reviewing"><%= percent_reviewing %>% awaiting review</div>  <% } %>  <% if ((percent_edited-percent_reviewing-percent_completed) > 0) { %>    <div class="item-status-text edited"><%= percent_edited - percent_reviewing - percent_completed %>% have edits</div>  <% } %></div><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_line.ejs"] = '<div sequence="<%= sequence %>" class="line <%= status.name %> <%= is_editable ? \'\' : \'not-editable\' %> <%= user_text ? \'user-edited\' : \'\' %>">  <div class="time"><%= UTIL.formatTimeMs(start_time) %></div>  <div class="controls">    <a href="#toggle-play" class="control toggle-play" title="toggle play and pause of this line" role="button"></a>  </div>  <div class="status <%= status.name %>" aria-label="<%= status.description %>" role="tooltip">    <div class="status-description" data-description="<%= status.description %>"></div>  </div>  <% if (has_speakers) { %>    <div class="speaker<%= speaker ? \' selected\' : \'\' %><%= speaker_pos >= 0 ? \' c\'+speaker_pos : \'\' %>">      <a class="change-speaker" title="indicate a speaker change"></a>      <div class="speaker-options">        <h4>Choose A Speaker<br /><small>(only necessary when speaker changes)</small></h4>        <div role="menu" aria-hidden="true">        <% _.each(speakers, function(s) { %>          <a data-id="<%= s.id %>" class="speaker-option<%= s.id == speaker.id ? \' selected\' : \'\' %>" role="menuitemradio" aria-checked="<%= s.id == speaker.id ? \'true\' : \'false\' %>"><%= s.name %></a>        <% }); %>        </div>      </div>    </div>  <% } %>  <div class="options">    <% if (status.name == \'reviewing\' && !user_text) { %>      <a href="#verify" class="button verify" title="Choose the best submitted edit" role="button">Verify</a>    <% } else if (status.name == \'completed\') { %>      <% if (can_resolve && flag_count > 0) { %>        <a href="#resolve" class="button resolve" title="Mark this line as resolved" role="button"></a>      <% } %>      <a href="#flag" class="button flag <%= flag_count > 0 ? \'active\' : \'\' %>" title="Flag this line as incorrect" role="button"></a>    <% } %>    <!-- <a class="button star" title="Star this line"></a> -->  </div>  <div class="text">    <% if (is_editable) { %>      <input class="text-input" type="text" value="<%= UTIL.escapeInput(display_text) %>" user-value="<%= UTIL.escapeInput(user_text) %>"  />    <% } else { %>      <input class="text-input not-editable" type="text" value="<%= UTIL.escapeInput(display_text) %>" user-value="<%= UTIL.escapeInput(user_text) %>" disabled="true"  />    <% } %>  </div></div>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_line_flag.ejs"] = '<section class="modal <%= active ? \'active\': \'\' %>" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">  <div class="modal-inner">    <header id="modal-label"><%= title %> <a href="#toggle" class="control toggle-play" role="button"></a></header>    <div class="modal-content">      <div id="flag-add" class="flag-content active">        <p>The transcribed text: <strong><%= line.text %></strong></p>        <div role="menu">          <% _.each(flag_types, function(type, i){ %>            <a href="#option-<%= type.id %>" class="option <%= type.id == line.user_flag.flag_type_id ? \'active\' : \'\' %>" type-id="<%= type.id %>" title="<%= type.description %>" role="menuitemradio" aria-checked="<%= type.id == line.user_flag.flag_type_id ? \'true\' : \'false\' %>"><%= type.label %></a>          <% }) %>        </div>        <label for="text">Add a comment (optional):</label>        <textarea name="text" class="input-text"><%= line.user_flag.text %></textarea>        <div class="message" role="alert" aria-atomic="true" aria-hidden="true"></div>      </div>      <div id="flag-index" class="flag-content">        <p>The transcribed text: <strong><%= line.text %></strong></p>        <% _.each(flags, function(flag, i){ %>          <div class="flag">            <span class="flag-type"><%= flag.flag_type_label %></span><%= flag.text.length ? \': \' + flag.text : \'\' %>            <% if (flag.is_resolved) { %>              <em>(resolved)</em>            <% } %>            <div class="flag-meta">by <%= flag.user_name %> on <%= UTIL.formatDate(flag.created_at) %></div>          </div>        <% }) %>      </div>    </div>    <footer>      <% if (flags.length > 0) { %>      <a href="#view-all" class="button pull-left content-link view-flags active" role="button">View All Flags</a>      <a href="#add" class="button pull-left content-link view-add-flag" role="button">Add A Flag</a>      <% } %>      <a href="#submit" class="button pull-right submit active" role="button">Submit</a>    </footer>  </div>  <a href="#close" class="modal-close modal-dismiss" title="Close this modal" aria-label="Close" role="button">x</a></section>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_line_verify.ejs"] = '<section class="modal <%= active ? \'active\': \'\' %>" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">  <div class="modal-inner">    <header id="modal-label"><%= title %> <a href="#toggle" class="control toggle-play" role="button"></a></header>    <div class="modal-content" role="menu">      <% _.each(edits, function(edit, i){ %>        <a href="#option-<%= edit.id %>" class="option <%= edit.active ? \'active\' : \'\' %>" edit-id="<%= edit.id %>" role="menuitemradio" aria-checked="<%= edit.active ? \'true\' : \'false\' %>"><%= UTIL.escapeInput(edit.text) %></a>      <% }) %>    </div>    <footer>      <a href="#none" class="button none-correct" role="button">None of these are correct</a>      <a href="#submit" class="button pull-right submit" role="button">Submit</a>    </footer>  </div>  <a href="#close" class="modal-close modal-dismiss" title="Close this modal" aria-label="Close" role="button">x</a></section>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_list.ejs"] = '<div class="transcript-list" role="list"></div><% if (has_more) { %><a href="#more" class="list-next button">Load More</a><% } %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_toolbar.ejs"] = '<div class="transcript-toolbar inverse" role="toolbar">  <div class="controls" role="menu">    <% _.each(controls, function(control){ %>      <div class="control <%= control.id %>" aria-label="<%= control.keyDescription %>" title="<%= control.keyDescription %>" style="width: <%= control_width_percent %>%" role="menuitem">        <div class="label" data-label="<%= control.label %>" aria-label="<%= control.keyDescription %>"></div>        <div class="key"><%= control.key %></div>      </div>    <% }) %>  </div></div><%= menu %>';
window.TEMPLATES=window.TEMPLATES || {}; window.TEMPLATES["transcript_user_progress.ejs"] = '<div class="progress-header">Your Progress</div><div class="progress-label">In this transcript, you have edited</div><div class="progress-value">  <span class="lines-edited"><%= UTIL.formatNumber(lines_edited) %></span> line<span class="plural<%= lines_edited > 1 ? \' active\' : \'\' %>">s</span>  <% if (percent_edited > 0) { %>    <span class="percent-edited">(<%= percent_edited %>%)</span>  <% } %></div><% if (percent_edited > 0) { %><div class="progress-bar"><div style="width: <%= percent_edited %>%"></div></div><% } %><% if (lines_available > 0) { %><div class="progress-label progress-available">Out of <span><%= UTIL.formatNumber(lines_available) %></span> available lines</div><% } %>';