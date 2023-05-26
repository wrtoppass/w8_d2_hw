interface Attackable{
    attack():void
}

interface Defendable{
    defend():void
}

abstract class Character implements Attackable, Defendable{
    protected gold$:number = 0
    protected attackAbility$:Attackable | undefined
    protected defenseAbility$:Defendable | undefined


    set attackAbility(value:Attackable){
        this.attackAbility$=value
    }
    set defenseAbility(value:Defendable){
        this.defenseAbility$=value
    }
    set gold(value:number){
        this.gold$=value
    }
    get gold(){
        return this.gold$
    }
    collectGold(value:number):void{
        this.gold$+=value
    }
    attack(){
        if(this.attackAbility$){
            this.attackAbility$.attack()
        }
    }
    defend(){
        if(this.defenseAbility$){
            this.defenseAbility$.defend()
        }
    } 
}

class Bow implements Attackable{
    attack(){
        console.log("Shoots a bow and arrow")
    }
}

class Club implements Attackable{
    attack(){
        console.log('Bludgeons with a club')
    }
}
class Sword implements Attackable{
    attack(){
        console.log('Swings a sword')
    }
}
class Axe implements Attackable{
    attack(){
        console.log('Hacks with axe')
    }
}
class Armor implements Defendable{
    defend(){
        console.log('Armor is taking damage')
    }
}
class Shield implements Defendable{
    defend(){
        console.log('Shield is taking damage')
    }
}
class Tunic implements Defendable{
    defend(){
        console.log('Tunic is taking damage')
    }
}

class Ogre extends Character{
    attackAbility$=new Club()
    defenseAbility$=new Shield()
}
class Peon extends Character{
    attackAbility$=new Club()
    defenseAbility$=new Shield()
}
class Knight extends Character{
    attackAbility$=new Sword()
    defenseAbility$=new Armor()
}
class Archer extends Character{
    attackAbility$=new Bow()
    defenseAbility$=new Tunic()
}
class Viking extends Character{
    attackAbility$=new Axe()
    defenseAbility$=new Tunic()
}

let bigboi=new Ogre()
bigboi.attack()
bigboi.defend()

let paladin=new Knight()
paladin.attack()
paladin.defend()

let serf=new Peon()
serf.attack()
serf.defend()

let forestelf=new Archer()
forestelf.attack()
forestelf.defend()

let barbarian=new Viking()
forestelf.attack()
forestelf.defend()