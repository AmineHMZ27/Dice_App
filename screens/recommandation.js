import React, { Component } from 'react';
import { G } from 'react-native-svg';
import games from '../components/game_list';
import { uChoice } from './ThirdPage'


export default function Recommandation() {

    console.log(uChoice)

    const uChoiceList = uChoice
    const gameList = games
    
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < uChoiceList.length; j++) {
            for (let k = 0; k < games[i].category.length; k++) {
                if (uChoiceList[j] == games[i].category[k]) {
                    for (let l = 0; l < 10; l++) {
                        gameList.push(games[i])
                    }
                }
            }
        }
    }

    const Recommand = []
    let m = 5

    while (m > 0) {
        let gameCandidate = gameList[Math.floor(Math.random() * gameList.length)]
        for (let p = 0; p < Recommand.length; p++) {
            console.log("hey")
            if (gameCandidate === Recommand[p]) { 
                gameCandidate = gameList[Math.floor(Math.random() * gameList.length)]
                p = 0
            }
        }
        Recommand.push(gameCandidate)
        m--
    }

    return Recommand;
    /* 
    let choice = userChoice
    let Recommandation (list)
    
    when you choose a category it gets multiplied in the gameList so that it has more chance to get picked by the random 
    function 
    
    this is python don't worry i'll translate in js later
    for i in gameList {
        if choice == gameList[i-1].category {
            for j in 8 {
                gameList.append(gameList[i-1])
            }
        }
    }

    for i in 5 {
        Recommandation.append(randomgame(gameList))
   }

   return Recommandation
    */
}