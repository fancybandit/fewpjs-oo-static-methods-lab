class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-' ]+/g, '');
    };

    static titleize(string) {
        const inapplicable = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
        
        let words = string.split(' ');
        words = words.map(function(word) {
            let invalid = inapplicable.find(e => e === word);
            if (!invalid || (words.indexOf(word) === 0)) {
                return this.capitalize(word);
            } else {
                return word;
            };
        }, this);
        
        return words.join(' ');
    };
};