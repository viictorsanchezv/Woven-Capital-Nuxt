[![https://github.com/woven-planet/woven-capital-website/actions/workflows/prod.yml/badge.svg?branch=main](https://github.com/woven-planet/woven-capital-website/actions/workflows/prod.yml/badge.svg?branch=main)](https://github.com/woven-planet/woven-capital-website/actions/workflows/prod.yml)

# Woven Capital Website
This is a repo for releasing the static website to AWS S3 bucket for https://www.woven-capital.global.

Please put all the website source code to the root of this repository.

`.github/workflows` is the github actions for building of the source code and the deployment pipeline to upload the static website to AWS S3 bucket.

Note: A pull request and approval are required to merge to the main branch.

![img](https://github.com/woven-planet/woven-capital-website/blob/main/woven-capital-website-diagram.png)

## For Development
### To test your code on Dev site: 
1. Git clone and check out your own branch from the `main` branch.
1. Update the website source code into root directory of this repository.
1. Push your code to your remote branch. No approval or pull request is required.
1. After pushing to the remote branch, the github actions will be triggered automatically and push the code into the development website. And you can see the updates from the [development website](http://d217og2ua49kfp.cloudfront.net).

### To push your code into the Prod site:
1. Make sure your code is ready and tested in the Dev site.
1. Make a pull request to `main` branch, and get approval from the repo owner. Please address the comment from the reviewer if any.
1. After getting the approval, the github actions will be triggered and push the code into the staging website.
1. Final check from the [staging website](d61oup7ogw0qo.cloudfront.net) site by the repo owner.
1. Approve the `deployment to the production` step from github actions by the repo owner and the code will be pushed into the production site.
1. Confirm the change from the [production website](https://www.woven-capital.global) and done. 

### Rollback Procedure:
1. Contact the repo owner to revert the commit from the `main` branch to the previous healthy commit.
1. The github actions will be triggered and push the code into the staging website.
1. Final check from the [staging website](d61oup7ogw0qo.cloudfront.net) site by the repo owner.
1. Approve the `deployment to the production` step from github actions by the repo owner and the code will be pushed into the production site.
1. Confirm the rollback change from the [production website](https://www.woven-capital.global) and done.


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
