// Mapbox access token — SETUP
//
// 1. Copy this file to  mapbox-config.js  (that file is gitignored; never
//    commit the real token).
//
// 2. Get a token at https://account.mapbox.com. Mapbox now requires a
//    payment method on the account, and it has NO hard spending cap — so
//    the token itself is where you contain the risk. Do all of the below.
//
// 3. Create a NEW public token (do not reuse the default one). Give it only
//    the default public scopes. Then, in that token's settings, add URL
//    restrictions so it ONLY works on your own origins, e.g.:
//        https://yourdomain.com/*
//        http://localhost:*
//    This is the important one: a URL-restricted token is useless to anyone
//    who copies it out of the page — requests from any other site are
//    rejected, so no one else can spend your quota. (A public token is
//    always visible in the browser; restricting it is the real defense, not
//    hiding it.)
//
// 4. Set up monitoring, since there is no auto-cutoff:
//    - account.mapbox.com -> Statistics: watch monthly map loads.
//    - Turn on billing/usage email alerts in account settings so you get
//      warned well before the 50,000 free loads/month are used up.
//    - If you want a true ceiling, the only guaranteed one is to delete or
//      rotate this token the moment usage looks wrong — that instantly
//      stops all map loads and the page falls back to the static island.
//
// 5. Belt-and-braces already in the page: experiences.html caps map loads
//    per browser per day (MAP_LOAD_CAP) and serves the static island once
//    tripped, so a single visitor can't run up the bill by reloading.
//
// window.MAPBOX_TOKEN = "pk.your_url_restricted_token_here";
