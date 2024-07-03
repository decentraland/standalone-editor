### Todo:

#### Configuration
* We are using the boilerplate's eslint rules, which some of them are weird, but others are pretty good. I don't
have a formulated opinion on this. Maybe we should stick with the dcl ones, maybe we should update them. I don't really know.
* @dcl/ui uses semantic-css, which has some weird format for importing in css, so I had to add the ".build/config/semantic-fix.js" to be used in the "webpack.config.renderer.*.ts" files as a css loader. This should be fixed
in @dcl/ui itself since it's a problem of webpack 5 + semantic-css.
* @dcl/ui uses @dcl/ui-env which has a method that uses the "process" variable (being a frontend library, idk what is the reason for that...), so there is a fix in the preload script to define that variable for the @dcl/ui to work. This should be fixed un @dcl/ui-env itself.
* [minor] Check why .mov/.webp imports are failing on vscode

#### Code
* Replace all "onOpenModal" types with the proper one (right now, we are hard-coding (name: string, metadata: any) => any; everywhere)
* Define a way to get projects creation/update date. Creation date can be stored somewhere in the project itself, but update date is trickier since the user can manually modify files outside of the editor.

---

### Info:
* Since sagas are not recommended anymore (https://stackoverflow.com/questions/72360331/is-it-worth-using-redux-saga-in-the-long-term and https://www.reddit.com/r/react/comments/1b8cn6u/is_redux_still_a_thing/), I had to migrate the "translations" component from decentraland-dapps to react 2024 (redux-toolkit). This might be the corner case to start updating the repo and migrate all the other sagas accordingly. Just to keep in mind. (PR: https://github.com/decentraland/decentraland-dapps/pull/629)