function colorChanger() {
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);    
    let z = Math.floor(Math.random()*256);
    const random = "rgb(" + x + ',' + y + ',' + z + ")";
    console.log(random);
    document.body.style.background = random;
;}
// Vue.js codes
 console.log(Math.floor(Math.random() * quotes.length));
    new Vue({
    el: '#app',
    data: {
        quotes,
        currentQuotes: quotes[2],
    },
    methods: {
        newQuotes: function() {
            const num = Math.floor(Math.random() * quotes.length)
            this.currentQuotes = quotes[num]
        }
    }
})