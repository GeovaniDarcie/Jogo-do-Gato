new Vue({
    el: '#app',
    data: {
        cat: 'O Gato',
        life: 100,
        begin: true,
        src: 'gato.png',
        miado: 1
    },

    methods:{
        hungry(){
            this.begin = !this.begin
            setInterval(() => {
                if(this.life <= 40 && this.miado == 1){
                    audio = new Audio('audios/miando.mp3#t=1,3')
                    audio.play()
                    this.miado += 1
                }

                if(this.life <= 20 && this.miado == 2){
                    audio = new Audio('audios/bravo.mp3#t=1,4')
                    audio.play();
                    this.miado += 1
                }

                if(this.life == 0){
                    this.cat = "SEU MONSTRO!!!"
                    this.src = 'morto.png'
                    clearInterval(hungry())
                }
                this.life -= 5;
            }, 1000);
        },

        food(){
            if(this.life <= 95 && this.life > 0){
                this.life += 5;
            }   
        },

        care(){
            if(this.life > 0){
                audio = new Audio('audios/carinho.mp3#t=1,2')
                audio.play();
            }
         
        }
    },
})