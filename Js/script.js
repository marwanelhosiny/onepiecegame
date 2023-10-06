function Character(name ,strength ,health){
    this.name =name;
    this.strength =strength;
    this.health =health;
    this.atkbtn = document.querySelector(`#${this.name}-attack`)
    this.healbtn = document.querySelector(`.${this.name}-heal`)
    this.progress = document.querySelector(`.${this.name}-health span`)
    this.msg =document.querySelector(`#${this.name}-msg`)
};

Character.prototype.attack=function(opponent){
    opponent.health -= this.strength;
    opponent.progress.style.width=`${opponent.health}%`;
    if(opponent.health<=0){
        opponent.atkbtn.remove();
        opponent.healbtn.remove();
        opponent.msg.innerHTML=`${opponent.name} Is Dead`
    }
    console.log(opponent.health);
}
Character.prototype.heal=function(){
    if(this.health<100){
        this.health+=10;
        this.progress.style.width=`${this.health}%`;

    }

    if(this.health>100){
        this.health=100;
    }
    console.log(this.health)
}
Character.prototype.status=function(){
    console.log(this.health);
    console.log(this.strength);
    console.log(this.name);
}

let Zoro =new Character('Zoro' ,10 ,100);
let Sanji =new Character('Sanji' ,5 ,100);

Zoro.atkbtn.addEventListener('click',function(){
    Zoro.attack(Sanji);
})
Sanji.atkbtn.addEventListener('click',function(){
    Sanji.attack(Zoro);
})
Zoro.healbtn.addEventListener('click',function(){
    Zoro.heal();
})
Sanji.healbtn.addEventListener('click',function(){
    Sanji.heal();
})