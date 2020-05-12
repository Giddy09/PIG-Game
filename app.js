
var roundScore, current_score, active_player, game_playing

init()

    

    

        var roll_dice = document.querySelector('.roll')
        roll_dice.addEventListener('click', function(){
            if(game_playing){
            var dice_value = Math.floor(Math.random() * 6 + 1)
            
            if(dice_value !== 1){
        
                current_score += dice_value
        
                document.querySelector('.dice').textContent = dice_value
                document.querySelector('#current-'+active_player).textContent = current_score
                document.querySelector('.next_player').style.visibility = 'hidden'
                
            }
            else{
                document.querySelector('.dice').textContent = dice_value
                change_player()
            }
        }
        })
    
    


        
        document.querySelector('.hold').addEventListener('click', function(){
            if(game_playing){

                roundScore[active_player] += current_score
                document.querySelector('#score-'+ active_player).textContent = roundScore[active_player]
                if(roundScore[active_player] >=100){
                    game_playing = false
                    document.querySelector('#player-' + active_player).textContent = 'Winner'
                    document.querySelector('#player-' + active_player).classList.toggle('winner')
                    document.querySelector('.next_player').style.visibility = 'visible'  
                    document.querySelector('#para').textContent = 'Player ' + (active_player + 1) + ' Won The Game.'
                }
                else{
                    change_player()
                }
            }
           
        })

    document.querySelector('.new').addEventListener('click',function(){
        init()
    })
    
function change_player(){

    if(active_player === 0){
        active_player = 1
    }
    else{
        active_player = 0
    }
    current_score = 0
    document.querySelector('#current-0').textContent = current_score
    document.querySelector('#current-1').textContent = current_score
   
    document.querySelector('.next_player').style.visibility = 'visible'    
}

   
function init(){
roundScore = [0,0]
current_score = 0
active_player = 0
game_playing = true;
document.querySelector('#score-0').textContent = 0
document.querySelector('#score-1').textContent = 0
document.querySelector('#current-0').textContent = 0
document.querySelector('#current-1').textContent = 0
document.querySelector('#player-0').textContent = 'Player 1'
document.querySelector('#player-1').textContent = 'Player 2'
document.querySelector('#para').textContent = "The next player's turn."
document.querySelector('.next_player').style.visibility = 'hidden'
document.querySelector('#player-0').classList.remove('winner')
document.querySelector('#player-1').classList.remove('winner')
}