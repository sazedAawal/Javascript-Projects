// constructor Function --- A factory for creating objects of the same characteristics.
function BellBoy(name, age, has_work_permit, languages){
    this.name = name;
    this.age = age;
    this.has_work_permit = has_work_permit;
    this.languages = languages;
    //Method ---
    this.moveSuitcase = function(){
        alert('May I take your suitcase?');
    }
}

function HouseKeeper(name, age, years_of_experience, cleaning_repertoire){
    this.name = name;
    this.age = age;
    this.years_of_experience = years_of_experience;
    this.cleaning_repertoire = cleaning_repertoire;
    //Method ---
    this.clean = function(){
        alert('Cleaning in progress...');
    }
}

var bellBoy1 = new BellBoy(
    'Timmy',
    19,
    true,
    ['French', 'English'],
);
bellBoy1.moveSuitcase();

var houseKeeper1 = new HouseKeeper(
    'Sarah',
    25,
    5,
    ['bathroom', 'lobby', 'bedroom'],
);
houseKeeper1.clean();