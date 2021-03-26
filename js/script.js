var app = new Vue(
   {
      el : "#app",
      data:{
         toDOList:[
            "Dormire in una stanza sott’acqua",
            "Dormire in un castello",
            "Farsi fare un tatuaggio da un monaco tibetano",
            "Visitare la Foresta Nera in Germania",
            "Ammirare le cascate dell’Iguazu",
            "Fare un viaggio zaino in spalla (senza valigia)",
            "Andare alle terme dell’Hotel Gellert di Budapest",
            "Fare un giro al Dubai Mall",
            "Volare in mongolfiera sui templi di Bagan in Myanmar",
            "Visitare Hoi an, la città delle lanterne, in Vietnam",
            "Fare un giro in gondola a Venezia",
            "Cavalcare un cavallo o un cammello nel deserto",
            "Pattinare sui canali congelati di Amsterdam"
         ],
         newItem: ''
      },
      methods:{
         deleteItem: function(itemIndex){
            this.toDOList.splice(itemIndex, 1);
         },
         addItem: function(){
            if (this.newItem !== ''){
               this.toDOList.push(this.newItem);
               this.newItem = '';
            }
         }
      }
   }
);