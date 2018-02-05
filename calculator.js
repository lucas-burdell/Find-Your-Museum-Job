var CalculateJob = (function(){
    var firstInitialWords = [
        'Jedi Master',
        'Captain',
        'President',
        'Ringleader',
        'Wrangler',
        'Executive Director',
        'Queen',
        'Curator',
        'Librarian',
        'Head Ninja',
        'Hero',
        'Duke',
        'Ambassador',
        'Host',
        'Project Coordinator',
        'Maestro',
        'Lord',
        'Instigator',
        'Prefect',
        'Luchador in Charge',
        'Investigator',
        'COO',
        'Czar',
        'CEO',
        'Vice President',
        'CFO'
    ];
    var secondInitialWords = [
        'Board Game Concepts',
        'Pizza Parties',
        'Sequin Distribution',
        'Coloring Outside the Lines',
        'Scoundrels',
        'Lazy River Tours',
        'Unicorn Husbandry',
        'Sarcasm, Snark',
        'Those Markers That Smell Good',
        'Monopoly Fundraising',
        'Finger Painting',
        'Lego Masonry',
        'Pun Development',
        'Bad Decisions',
        'Inappropriate Behavior',
        'Smoke Signal Marketing',
        'Abstract Concepts',
        'Competitive Eating Programs',
        'Time Travel',
        'Beatboxing',
        'Bees?',
        'Speaking in a Ridiculous Accent',
        'Lightsaber Manufacturing',
        'Cartoon Physics',
        'Pasta Design',
        'Awesome Sauce'
    ];
    var thirdInitialWords = [
        'Ne\'er Do Wells',
        'Puppy Partnerships',
        'Axe Throwing',
        'Teaching New Dogs Old Tricks',
        'Tiddlywinks',
        'Caffeine Delivery',
        'Bubble Baths',
        'Ukulele Musings',
        'Treasure Maps',
        'Kaleidoscope Design',
        'Turtle Talks',
        'Punching the Holes in Donuts',
        'Whimsy',
        'Pretending to be Busy',
        'Hide & Seek',
        'Measured Chaos',
        'Funky Hats',
        'French Fry Fanfare',
        'Quirky Behavior',
        'Naptime Plushy Distribution',
        'Underwater Basket Weaving',
        'Lobsters',
        'Muppet Relations',
        'Cheese Cutting',
        'Blanket Fort Construction',
        'Spontaneous Musical Numbers'
    ];
    var monthWords = [
        'Museum',
        'Library',
        'Academy',
        'Conservatory',
        'Gallery',
        'Hall',
        'Institute',
        'Garden',
        'Aquarium',
        'Zoo',
        'Theater',
        'Exhibition'
    ];
    var dateWords = [
        'Feline Psychology',
        'Science Magic',
        'Sandbox Archaeology',
        'Vocal Farts',
        'Medicinal Plants',
        'Scatological Humor',
        'Late Capitalism',
        'Spice World',
        'Scooby Snacks',
        'Whiskey Consumption',
        'Taco Operas',
        'Jigs, Rags, and Other Dances',
        'Penguin Advancement',
        'Dismantling the Patriarchy',
        'Sloths Racing Snails',
        'Equine Liberation',
        'All Green Things',
        'Questionable Content',
        'Astrological Studies',
        'Contemporary Sportsball',
        'Chocolate Chip Cookies',
        'Natural Herstory',
        'Popcorn Art',
        'Dinosaur Butts',
        'Inaccurate History',
        'The Flintstones\' Technology',
        'Haberdashery Arts',
        'Ice Cream Sculpture',
        'Historic Hogsmeade',
        'Late Night Sketch Comedy',
        'Batman'
    ];
    return function(){
        $(document).ready(function(){
            // input first/second/third initial, inputMonth inputDate
            var firstInitial = parseInt($("#inputFirstInitial").val());
            var secondInitial = parseInt($("#inputSecondInitial").val());
            var thirdInitial = parseInt($("#inputThirdInitial").val());
            var month = parseInt($("#inputMonth").val());
            var date = parseInt($("#inputDate").val());
            if (isNaN(firstInitial) || isNaN(secondInitial) || isNaN(thirdInitial) ||
                isNaN(month) || isNaN(date) ) {
                return null;
            } else {
                var text = (firstInitialWords[firstInitial] + " of " + secondInitialWords[secondInitial] +
                    " and " + thirdInitialWords[thirdInitial] + " at the " + monthWords[month] + " of " + dateWords[date]);
                $("#job-title").text(text);
                console.log(text);
                $("#result-box").fadeIn();
                $("#game-form").fadeOut();
            }


        });
    }
})();