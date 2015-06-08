
var CharacterFactory = {
    mapping: {},

    add: function(key, characterClass)
    {
        key = key.toUpperCase();

        this.mapping[key] = characterClass;
    },

    get: function(key, color, offsetX, offsetY)
    {
        key = key.toUpperCase();

        if ( ! (key in this.mapping)) {
            throw 'Invalid Character "' + key + '"';
        }

        return new this.mapping[key](color, offsetX, offsetY);
    }
};

CharacterFactory.add('A', LetterA);
CharacterFactory.add('B', LetterB);
CharacterFactory.add('C', LetterC);
CharacterFactory.add('D', LetterD);
CharacterFactory.add('E', LetterE);
CharacterFactory.add('F', LetterF);
CharacterFactory.add('G', LetterG);
CharacterFactory.add('H', LetterH);
CharacterFactory.add('I', LetterI);
CharacterFactory.add('J', LetterJ);
CharacterFactory.add('K', LetterK);
CharacterFactory.add('L', LetterL);
CharacterFactory.add('M', LetterM);
CharacterFactory.add('N', LetterN);
CharacterFactory.add('O', LetterO);
CharacterFactory.add('P', LetterP);
CharacterFactory.add('Q', LetterQ);
CharacterFactory.add('R', LetterR);
CharacterFactory.add('S', LetterS);
CharacterFactory.add('T', LetterT);
CharacterFactory.add('U', LetterU);
CharacterFactory.add('V', LetterV);
CharacterFactory.add('W', LetterW);
CharacterFactory.add('X', LetterX);
CharacterFactory.add('Y', LetterY);
CharacterFactory.add('Z', LetterZ);

CharacterFactory.add('0', Number0);
CharacterFactory.add('1', Number1);
CharacterFactory.add('2', Number2);
CharacterFactory.add('3', Number3);
CharacterFactory.add('4', Number4);
CharacterFactory.add('5', Number5);
CharacterFactory.add('6', Number6);
CharacterFactory.add('7', Number7);
CharacterFactory.add('8', Number8);
CharacterFactory.add('9', Number9);

CharacterFactory.add(' ', TokenSpace);
