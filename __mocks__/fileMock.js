const mockUsers = { "users": [
  {
     "id":1,
     "firstName":"Terry",
     "lastName":"Medhurst"
  },
  {
     "id":2,
     "firstName":"Sheldon",
     "lastName":"Quigley"
  },
  {
     "id":3,
     "firstName":"Terrill",
     "lastName":"Hills"
  },
  {
     "id":4,
     "firstName":"Miles",
     "lastName":"Cummerata"
  },
  {
     "id":5,
     "firstName":"Mavis",
     "lastName":"Schultz"
  },
  {
     "id":6,
     "firstName":"Alison",
     "lastName":"Reichert"
  },
  {
     "id":7,
     "firstName":"Oleta",
     "lastName":"Abbott"
  },
  {
     "id":8,
     "firstName":"Ewell",
     "lastName":"Mueller"
  },
  {
     "id":9,
     "firstName":"Demetrius",
     "lastName":"Corkery"
  },
  {
     "id":10,
     "firstName":"Eleanora",
     "lastName":"Price"
  }
]};

const mockPosts = {
   "posts":[
      {
         "id":10,
         "title":"They rushed out the door.",
         "body":"They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
         "userId":1,
         "tags":[
            "fiction",
            "magical",
            "history"
         ],
         "reactions":4
      },
      {
         "id":14,
         "title":"The paper was blank.",
         "body":"The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
         "userId":1,
         "tags":[
            "mystery",
            "english",
            "love"
         ],
         "reactions":0
      },
      {
         "id":95,
         "title":"So what is the answer? How can you stand",
         "body":"From the moment you go to prison you must put your cozy past firmly behind you. At the very threshold, you must say to yourself: “My life is over, a little early to be sure, but there’s nothing to be done about it. I shall never return to freedom.",
         "userId":1,
         "tags":[
            "love",
            "fiction",
            "history"
         ],
         "reactions":2
      }
   ],
   "total":3,
   "skip":0,
   "limit":3
};

module.exports = {
  mockUsers,
  mockPosts,
};
