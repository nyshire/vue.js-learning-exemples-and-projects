const app = Vue.createApp({
  data(){
    return {
      books: [
        {title: 'Steve Jobs', author: 'Issacson Walter', isFav: false, img: 'assets/jobs.webp'},
        {title: 'Win friends', author: 'Dale Carnegie', isFav: true, img: 'assets/win.jpg'},
        {title: 'Poor dad, rich dad', author: 'R. Kyosaky', isFav: false, img: 'assets/poor.jpg'},
        {title: '21, century of ideas', author: 'SMSN', isFav: true, img: 'assets/century.jpg'},
        {title: 'The 4 hours workweek', author: 'T. Ferris', isFav: false, img: 'assets/4hours.jpg'},
      ]
    }
  },
  methods: {
    toggleFav(e, book){
      book.isFav = !book.isFav;
    }
  }
});

app.mount('#app');