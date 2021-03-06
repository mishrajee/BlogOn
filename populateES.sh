ES_HOST=localhost:9200


curl -XDELETE $ES_HOST/blogon

curl -XPUT $ES_HOST/blogon

curl -XPUT $ES_HOST/blogon/_mapping/blogs -d '{
	"properties": {
	    "name": {
	      "type": "string"
	    },
	    "authorId": {
	        "type": "string",
	    	"index": "not_analyzed"
	    },
	    "date": {
	    	"type": "date",
	        "format": "strict_date_optional_time"
	    },
	    "summary": {
	    	"type": "string"
	    },
	    "content": {
	    	"type": "string"
	    },
	    "authorName": {
	    	"type": "string"
	    }
	  }
}'

curl -XPUT $ES_HOST/blogon/_mapping/users -d '{
	 "properties": {
    "name": {
      "type": "string"
    },
    "password":{
        "type": "string",
        "index": "not_analyzed"
    },
    "username": {
        "type": "string",
    	"index": "not_analyzed"
    },
    "doj": {
    	"type": "date"
    },
    "about": {

    	"type": "string"
    },
    "occupation": {
    	"type": "string"
    },
    "gender": {
    	"type": "string",
    	"index": "not_analyzed"
    }
  }
}'


curl -XPUT $ES_HOST/blogon/users/AVReolbt8ZISLj5Tw7oK -d '{
	"username": "sahil",
               "password": "mutneja",
               "doj": "2016-04-29",
               "about": "braveheart person, love stage performances ... of other people",
               "occupation": "rockstar by heart",
               "name": "Sahil Mutneja",
               "gender": "male"
}'
curl -XPUT $ES_HOST/blogon/users/AVRem-708ZISLj5Tw7oB -d '{
	"username": "abhinava",
               "password": "mishra",
               "doj": "2016-04-29",
               "about": "My favourite pass time in photography",
               "occupation": "SE",
               "name": "Abhinava Mishra",
               "gender": "male"
}'
curl -XPUT $ES_HOST/blogon/users/AVRenerl8ZISLj5Tw7oE -d '{
	"username": "chinmay",
               "password": "krishna",
               "doj": "2016-04-29",
               "about": "I love designing and UI development",
               "occupation": "designer",
               "name": "Chinmay Krishna",
               "gender": "male"
}'

curl -XPUT $ES_HOST/blogon/blogs/AVReoKee8ZISLj5Tw7oH -d '{
               "name": "What is induction heating",
               "summary": "Induction heating is the process of heating an electrically conducting object (usually a metal) by electromagnetic induction, through heat generated in the object by eddy currents (also called Foucault currents)",
               "content": "Induction heating is the process of heating an electrically conducting object (usually a metal) by electromagnetic induction, through heat generated in the object by eddy currents (also called Foucault currents).  An induction heater consists of an electromagnet, and an electronic oscillator that passes a high-frequency alternating current (AC) through the electromagnet. The rapidly alternating magnetic field penetrates the object, generating electric currents inside the conductor called eddy currents. The eddy currents flowing through the resistance of the material heat it by Joule heating. In ferromagnetic (and ferrimagnetic) materials like iron, heat may also be generated by magnetic hysteresis losses. The frequency of current used depends on the object size, material type, coupling (between the work coil and the object to be heated) and the penetration depth. Important feature of the induction heating process is that the heat is generated inside the object itself, instead of by an external heat source via heat conduction. Thus objects can be heated very rapidly. In addition there need not be any external contact, which can be important where contamination is an issue. Induction heating is used in many industrial processes, such as heat treatment in metallurgy, Czochralski crystal growth and zone refining used in the semiconductor industry, and to melt refractory metals which require very high temperatures. It is also used in induction cooktops for heating containers of food; this is called induction cooking.",
               "date": "2016-04-29",
               "authorId": "AVRenerl8ZISLj5Tw7oE",
               "authorName": "Chinmay Krishna"
            }'

curl -XPUT $ES_HOST/blogon/blogs/AVRen3rz8ZISLj5Tw7oG -d '{
               "name": "Muscular contraction!",
               "summary": "Muscle contraction is the activation of tension-generating sites within muscle fibers",
               "content": "Muscle contraction is the activation of tension-generating sites within muscle fibers.[1][2] In physiology, muscle contraction does not mean muscle shortening because muscle tension can be produced without changes in muscle length such as holding a heavy book or a dumbbell at the same position.[1] The termination of muscle contraction is followed by muscle relaxation, which is a return of the muscle fibers to their low tension-generating state.[1] Muscle contractions can be described based on two variables: length and tension.[1] A muscle contraction is described as isometric if the muscle tension changes but the muscle length remains the same.[1][3][4][5] In contrast, a muscle contraction is isotonic if muscle length changes but the muscle tension remains the same.[1][3][4][5] If the muscle length shortens, the contraction is concentric;[1][6] if the muscle length lengthens, the contraction is eccentric. In natural movements that underlie locomotor activity, muscle contractions are multifaceted as they are able to produce changes in length and tension in a time-varying manner.[7] Therefore, neither length nor tension is likely to remain the same in muscles that contract during locomotor activity. In vertebrates, skeletal muscle contractions are neurogenic as they require synaptic input from motor neurons to produce muscle contractions. A single motor neuron is able to innervate multiple muscle fibers, thereby causing the fibers to contract at the same time. Once innervated, the protein filaments within each skeletal muscle fiber slide past each other to produce a contraction, which is explained by the sliding filament theory. The contraction produced can be described as a twitch, summation, or tetanus, depending on the frequency of action potentials. In skeletal muscles, muscle tension is at its greatest when the muscle is stretched to an intermediate length as described by the length-tension relationship. Smooth and cardiac muscle contractions are myogenic and can be modulated by the autonomic nervous system. The mechanisms of contraction in these muscle tissues are similar to those in skeletal muscle tissues.",
               "date": "2016-04-29",
               "authorId": "AVRenerl8ZISLj5Tw7oE",
               "authorName": "Chinmay Krishna"
            }'
curl -XPUT $ES_HOST/blogon/blogs/AVReoVSx8ZISLj5Tw7oI -d '{
               "name": "Why you should do strength training",
               "summary": "Strength training is a type of physical exercise specializing in the use of resistance to induce muscular contraction which builds the strength, anaerobic endurance, and size of skeletal muscles.",
               "content": "Strength training is a type of physical exercise specializing in the use of resistance to induce muscular contraction which builds the strength, anaerobic endurance, and size of skeletal muscles. When properly performed, strength training can provide significant functional benefits and improvement in overall health and well-being, including increased bone, muscle, tendon and ligament strength and toughness, improved joint function, reduced potential for injury,[1] increased bone density, increased metabolism, increased fitness,[2][3] improved cardiac function, and improved lipoprotein lipid profiles, including elevated HDL (good) cholesterol.[4] Training commonly uses the technique of progressively increasing the force output of the muscle through incremental weight increases and uses a variety of exercises and types of equipment to target specific muscle groups. Strength training is primarily an anaerobic activity, although some proponents have adapted it to provide the benefits of aerobic exercise through circuit training. Sports where strength training is central are bodybuilding, weightlifting, powerlifting, strongman, Highland games, shotput, discus throw, and javelin throw. Many other sports use strength training as part of their training regimen, notably American football, wrestling, track and field, rowing, lacrosse, basketball, pole dancing, hockey, professional wrestling, rugby union, rugby league and soccer. Strength training for other sports and physical activities is becoming increasingly popular.",
               "date": "2016-04-29",
               "authorId": "AVRenerl8ZISLj5Tw7oE",
               "authorName": "Chinmay Krishna"
            }'
curl -XPUT $ES_HOST/blogon/blogs/AVReovXt8ZISLj5Tw7oM -d '{
               "name": "Central Asian Review",
               "summary": "Central Asian Review was a journal of Central Asian Studies published from 1953 to 1968.",
               "content": "The journals full title was Central Asian Review: A Quarterly Review of Current Developments in Soviet Central Asia and Kazakhstan and was published quarterly by the Central Asian Research Centre in association with St. Antonys College, Oxford University. Founder and director of the center, Geoffrey Wheeler was the editor-in-chief and frequent contributor to the journal.[1][2] Central Asian Review was one of the primary venues for scholarly articles concerning Central Asia and was the main English language source for digests of Soviet press coverage of Central Asia. The journal was notable because it was one of the few periodicals of Central Asian Studies published during a time when research in the field was difficult, due to Soviet censorship and travel restrictions for researchers. In 1968 Wheeler left the Central Asian Research Center and the following year “Central Asian Review” was incorporated into the journal Mizan, published by the center from 1965 to 1971",
               "date": "2016-04-29",
               "authorId": "AVReolbt8ZISLj5Tw7oK",
               "authorName": "Sahil Mutneja"
            }'
curl -XPUT $ES_HOST/blogon/blogs/AVRenrQD8ZISLj5Tw7oF -d '{
               "name": "Be a public defender",
               "summary": "A public defender is an attorney appointed to represent people who cannot afford to hire one. It is also a literal translation of the Spanish language term abogado de oficio, which usually refers to an ombudsman office; it is also the English language title of the Jamaican ombudsman.",
               "content": "Brazil is the only country where an office of government-paid lawyers, with the specific purpose of providing legal assistance and representation to the destitute, free of charge, is established in the Constitution. In the United States, a 1963 US Supreme Court case Gideon v. Wainwright ruled that the Sixth Amendment of the Bill of Rights requires the government to provide free legal counsel to indigent defendants in criminal cases.[1] Many other countries provide people with public defenders.",
               "date": "2016-04-29",
               "authorId": "AVRenerl8ZISLj5Tw7oE",
               "authorName": "Chinmay Krishna"
            }'
 curl -XPUT $ES_HOST/blogon/blogs/AVReqBuX8ZISLj5Tw7oQ -d '{
               "name": "Mars and fiction",
               "summary": "Fictional representations of Mars have been popular for over a century. Interest in Mars has been stimulated by the planets dramatic red color, by early scientific speculations that its surface conditions might be capable of supporting life, and by the possibility that Mars could be colonized by humans in the future. Almost as popular as stories about Mars are stories about Martians engaging in activity (frequently invasions) away from their home planet.",
               "content": "In the 20th century, actual spaceflights to the planet Mars, including seminal events such as the landing of the first mechanized device to successfully operate on Mars in 1976 (in the Viking program), inspired a great deal of interest in Mars-related fiction. Exploration of the planet has continued in the 21st century on to the present day. Before the Mariner 4 spacecraft arrived at Mars in July 1965 and dispelled some of the more exotic theories about the planet, the conventional image of Mars was shaped by the observations of the astronomers Giovanni Schiaparelli, Camille Flammarion and Percival Lowell. Flammarion assumed its red surface came from red-colored vegetation,[1] and Schiaparelli observed what he took to be linear features on the face of Mars, which he thought might be water channels. Because the Italian for channels is canali, English translations tended to render the word as canals, implying artificial construction. Lowells books on Mars expanded on this notion of Martian canals, and a standard model of Mars as a drying, cooling, dying world was established. It was frequently speculated that ancient Martian civilizations had constructed irrigation works that spanned the planet in an attempt at saving their dying world. This concept spawned a large number of science fiction scenarios. The following works of fiction deal with the planet itself, with any assumed Martian civilization as part of its planetary landscape.Several early modern writers, including Athanasius Kircher (1602–1680) and Emanuel Swedenborg (1688-1772), hypothesized contact with Mars. Early science fiction about Mars often involved the first voyages to the planet, sometimes as an invasion force, more often for the purposes of exploration.",
               "date": "2016-04-29",
               "authorId": "AVReolbt8ZISLj5Tw7oK",
               "authorName": "Sahil Mutneja"
            }'
 curl -XPUT $ES_HOST/blogon/blogs/AVRenIUp8ZISLj5Tw7oC -d '{
               "name": "Photography",
               "summary": "Photography is the science, art and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.",
               "content": "Typically, a lens is used to focus the light reflected or emitted from objects into a real image on the light-sensitive surface inside a camera during a timed exposure. With an electronic image sensor, this produces an electrical charge at each pixel, which is electronically processed and stored in a digital image file for subsequent display or processing. The result with photographic emulsion is an invisible latent image, which is later chemically developed into a visible image, either negative or positive depending on the purpose of the photographic material and the method of processing. A negative image on film is traditionally used to photographically create a positive image on a paper base, known as a print, either by using an enlarger or by contact printing. Photography is employed in many fields of science, manufacturing (e.g., photolithography) and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.",
               "date": "2016-04-29",
               "authorId": "AVRem-708ZISLj5Tw7oB",
               "authorName": "Abhinava Mishra"
            }'
curl -XPUT $ES_HOST/blogon/blogs/AVRenWPN8ZISLj5Tw7oD -d '{
               "name": "The art of hand walking",
               "summary": "Hand walking is an unusual form of human locomotion in which a person travels in a vertically inverted orientation with all body weight resting on the hands",
               "content": "It can be executed with legs fully extended or with variations such as stag, straddle or front splits. Hand walking is performed in various athletic activities, including acro dance and circus acrobatics.Hand walking is a skill that relies on a prerequisite ability to perform handstands, which in turn requires adequate upper body pressing strength in the deltoids and triceps as well as a heightened sense of balance and spatial awareness. Because the body is inverted during hand walking, blood pressure in the brain is greater than normal. As with other physical skills, one must practice hand walking in order to become proficient and develop adequate endurance. Handstands and hand walking are often learned at the same time because hand walking can be used to help maintain balance in a handstand before one learns to perform a stable handstand. Balance can also be maintained by varying the arch of the back.",
               "date": "2016-04-29",
               "authorId": "AVRem-708ZISLj5Tw7oB",
               "authorName": "Abhinava Mishra"
            }'
