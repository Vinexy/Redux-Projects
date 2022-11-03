import { createSlice, current, nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const CardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: [
      {
        id: nanoid(),
        text: "angular2",
        isVisible: false,
        img: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
      },
      {
        id: nanoid(),
        text: "vue",
        isVisible: false,
        img: "https://images.opencollective.com/vuejs/25a8146/logo/256.png",
      },
      {
        id: nanoid(),
        text: "react",
        isVisible: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        id: nanoid(),
        text: "grunt",
        isVisible: false,
        img: "https://gruntjs.com/img/og.png",
      },
      {
        id: nanoid(),
        text: "phantomjs",
        isVisible: false,
        img: "https://pbs.twimg.com/profile_images/1884362265/phantomjs_400x400.png",
      },
      {
        id: nanoid(),
        text: "ember",
        isVisible: false,
        img: "https://cdn.shopify.com/s/files/1/1080/6594/files/ember_logo_framed_high_orange_white_600_3bc26ee3-90d8-413c-b997-d77e50f195b1.jpg?v=1631044891",
      },
      {
        id: nanoid(),
        text: "babel",
        isVisible: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1280px-Babel_Logo.svg.png",
      },
      {
        id: nanoid(),
        text: "ionic",
        isVisible: false,
        img: "https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png",
      },
      {
        id: nanoid(),
        text: "gulp",
        isVisible: false,
        img: "https://i.pinimg.com/originals/cb/14/ba/cb14ba95d41fdead54aa465a61abee2c.png",
      },
      {
        id: nanoid(),
        text: "meteor",
        isVisible: false,
        img: "https://seeklogo.com/images/M/meteor-logo-513B96BFB2-seeklogo.com.png",
      },
      {
        id: nanoid(),
        text: "yeoman",
        isVisible: false,
        img: "https://yeoman.io/static/yeoman-character-sticker.51cef7e007.png",
      },
      {
        id: nanoid(),
        text: "yarn",
        isVisible: false,
        img: "https://avatars.githubusercontent.com/u/22247014?s=200&v=4",
      },
      {
        id: nanoid(),
        text: "nodejs",
        isVisible: false,
        img: "https://tublitzed.com/img/portfolio/node/browser/full/1.jpg",
      },
      {
        id: nanoid(),
        text: "bower",
        isVisible: false,
        img: "https://bower.io/img/bower-logo.png",
      },
      {
        id: nanoid(),
        text: "browserify",
        isVisible: false,
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Browserify.svg/1200px-Browserify.svg.png",
      },
      {
        id: nanoid(),
        text: "angular2",
        isVisible: false,
        img: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
      },
      {
        id: nanoid(),
        text: "vue",
        isVisible: false,
        img: "https://images.opencollective.com/vuejs/25a8146/logo/256.png",
      },
      {
        id: nanoid(),
        text: "react",
        isVisible: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        id: nanoid(),
        text: "grunt",
        isVisible: false,
        img: "https://gruntjs.com/img/og.png",
      },
      {
        id: nanoid(),
        text: "phantomjs",
        isVisible: false,
        img: "https://pbs.twimg.com/profile_images/1884362265/phantomjs_400x400.png",
      },
      {
        id: nanoid(),
        text: "ember",
        isVisible: false,
        img: "https://cdn.shopify.com/s/files/1/1080/6594/files/ember_logo_framed_high_orange_white_600_3bc26ee3-90d8-413c-b997-d77e50f195b1.jpg?v=1631044891",
      },
      {
        id: nanoid(),
        text: "babel",
        isVisible: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1280px-Babel_Logo.svg.png",
      },
      {
        id: nanoid(),
        text: "ionic",
        isVisible: false,
        img: "https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png",
      },
      {
        id: nanoid(),
        text: "gulp",
        isVisible: false,
        img: "https://i.pinimg.com/originals/cb/14/ba/cb14ba95d41fdead54aa465a61abee2c.png",
      },
      {
        id: nanoid(),
        text: "meteor",
        isVisible: false,
        img: "https://seeklogo.com/images/M/meteor-logo-513B96BFB2-seeklogo.com.png",
      },
      {
        id: nanoid(),
        text: "yeoman",
        isVisible: false,
        img: "https://yeoman.io/static/yeoman-character-sticker.51cef7e007.png",
      },
      {
        id: nanoid(),
        text: "yarn",
        isVisible: false,
        img: "https://avatars.githubusercontent.com/u/22247014?s=200&v=4",
      },
      {
        id: nanoid(),
        text: "nodejs",
        isVisible: false,
        img: "https://tublitzed.com/img/portfolio/node/browser/full/1.jpg",
      },
      {
        id: nanoid(),
        text: "bower",
        isVisible: false,
        img: "https://bower.io/img/bower-logo.png",
      },
      {
        id: nanoid(),
        text: "browserify",
        isVisible: false,
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Browserify.svg/1200px-Browserify.svg.png",
      },
    ],
    points: 0,
    isFinished: false,
  },
  reducers: {
    changeVisible: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, isVisible: !item.isVisible }
          : item
      );
    },
    shuffle: (state) => {
      state.items = state.items.sort(() => Math.random() - 0.5);
    },
    addPoint: (state) => {
      state.points += 50;
    },
    deletePoint: (state) => {
      state.points -= 10;
    },
  },
});

export const { changeVisible, shuffle, addPoint, deletePoint } =
  CardsSlice.actions;

export default CardsSlice.reducer;
