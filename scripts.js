// The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Adapted code via response here: (http://stackoverflow.com/questions/29927803/how-to-check-all-elements-in-row-column-clicked-bingo-game)
function checkBoard(){
	var possibleWinners = app.winners.length;

	var selected = [];

	$('.square.active').each(function(index, el) {
		selected.push($(this).attr('data-index'));
	});

	for(var i = 0; i < possibleWinners; i++){
		var cellExists = 0;
		for(var j = 0; j < 5; j++){
           if($.inArray(app.winners[i][j], selected) > -1) {
                cellExists++;
            }
		}
        if(cellExists == 5) {
        	$('#app .inner-wrap').append('<h2 class="announcement">'+app.winner+'</h2>')
            $('.announcement').addClass('active');
            $('#app .inner-wrap').addClass('off');
            $('.reset').addClass('active');
        }
	}
}

var app = new Vue({
	el: '#app',
	data: {
		title: 'Office Tour BINGO!',
		winner: 'You Win!',
		board: [],
		terms: [
			'Kitchen',  
			'Event',  
			'Operation',
			'Tv/Monitor',
			'Strategy',
			'Wall',
			'Bean Bags',
			'Light',
			'Sleep/Nap',
			'Wood',
			'Law Office',
			'Account',
			'Space',
			'Parking',
			'Open',
			'Concrete',
			'Digital',
			'Live Stream',
			'Interactive',
			'Collaboration',
			'Creative',
			'Brainstorm',
			'Sonos/Sound System',
			'Project',
			'Monkey',
			'Mural',
			'Manager',
			'Intern',
			'Funky',
			'Future',
			'Marketing',
		],
		winners: [
			['1','2','3','4','5'],
			['6','7','8','9','10'],
			['11','12','13','14','15'],
			['16','17','18','19','20'],
			['21','22','23','24','25'],
			['1','6','11','16','21'],
			['2','7','12','17','22'],
			['3','8','13','18','23'],
			['4','9','14','19','24'],
			['5','10','15','20','25'],
			['1','7','13','19','20'],
			['5','9','13','17','21']
		],
	},
	methods: {
		markSquare: function(index){
			$('.square[data-index="'+(index+1)+'"]').toggleClass('active');
			checkBoard();
		},
		resetBoard: function(){
			// Refactor this?
			this.board = [];
			var board = this.board;
			this.terms.forEach(function(value){
				board.push(value);
			});
			board = shuffle(board);
			if(board.length > 23){
				board.splice(23, board.length - 23);
				board.push('FREE SPACE');
				board.push('FREE SPACE');
				board = shuffle(board);
			}
			$('.square.active').not('active--lock').removeClass('active');
			$('.announcement').remove();
			$('#app .off').removeClass('off');
			$('.reset').removeClass('active');
		}
	},
	created: function(){
		// Refactor this?
		var board = this.board;
		this.terms.forEach(function(value){
			board.push(value);
		});
		board = shuffle(board);
		if(board.length > 23){
			board.splice(23, board.length - 23);
			board.push('FREE SPACE');
			board.push('FREE SPACE');
			board = shuffle(board);
		}
	}
})


