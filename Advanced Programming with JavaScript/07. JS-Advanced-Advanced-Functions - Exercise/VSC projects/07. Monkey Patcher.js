//  solution = (() => {

//      let commands = {
//          upvote: (post) => post.upvotes++,
//          downvote: (post) => post.downvotes++,
//          score: (post) => {
//              let {
//                  upvotes,
//                  downvotes
//              } = post;
//              let totals = upvotes + downvotes;
//              let balance = upvotes - downvotes;
//              let obfuscationNumber = 0;

//              if (totals > 50) {
//                  obfuscationNumber = Math.ceil(0.25 * Math.max(upvotes, downvotes));
//                  upvotes += obfuscationNumber;
//                  downvotes += obfuscationNumber;
//              }
//              let rating = "";

//              if (upvotes / totals > 0.66) {
//                  rating = "hot";
//              }
//              if (balance >= 0 && (upvotes > 100 || downvotes > 100)) {
//                  rating = "controversial";
//              }
//              if (totals < 10) {
//                  rating = "new";
//              }
//              if (balance < 0) {
//                  rating = "unpopular";
//              }

//              return [upvotes + obfuscationNumber, downvotes + obfuscationNumber, balance, rating];
//          }
//      };

//      return {
//          call: (post, argument) => commands[argument](post)
//      };
//  })();


//  let post = {
//      id: '3',
//      author: 'emil',
//      content: 'wazaaaaa',
//      upvotes: 100,
//      downvotes: 100
//  };

solution = (() => {

    let commands = {
        upvote: (post) => (post.upvotes += 1),
        downvote: (post) => (post.downvotes += 1),
        score: (post) => {
            let {
                upvotes,
                downvotes
            } = post;
            let obfuscationNumber = 0;
            let [total, balance] = [upvotes + downvotes, upvotes - downvotes];

            if (total > 50) {
                obfuscationNumber = Math.ceil(0.25 * Math.max(upvotes, downvotes));
            }
            let rating = "new";

            if (total < 10) {
                rating = "new";
            } else if (upvotes / total > 0.66) {
                rating = "hot";
            } else if (downvotes / total <= 0.66 && balance >= 0 && (upvotes > 100 || downvotes > 100)) {
                rating = "controversial";
            } else if (balance < 0 && total >= 10) {
                rating = "unpopular";
            }

            return [upvotes + obfuscationNumber, downvotes + obfuscationNumber, balance, rating];
        },
    };

    return {
        call: (post, argument) => commands[argument](post),
    };
})();

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']