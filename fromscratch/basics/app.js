const app = Vue.createApp({
  // data, functions, template to render...
  // Vue will automatically render this propriete in the mounted element
  // template: `<h2>I am a template !</h2>`
  data(){
    return {
      title: `The Final Empire`,
      author: `Dale Carnegie`,
      age: 30,
      x: 0,
      y: 0,
      books: [
        {title: 'Win Friends', author: 'Dale Carnege'},
        {title: 'Steve Jobs', author: 'Isaacson Walter'},
        {title: 'Another book', author: 'Moustapha'},
      ]
    };
  },
  methods: {
    changeTitle(){
      this.title = 'Coolest book in the world !';
    },
    handleMousemove(e){
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});

app.mount('#app');