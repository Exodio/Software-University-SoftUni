class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    };

    get likes() {

        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        let userLikes = this._likes.find(x => x === username); //if the username tries to like the same article for a second time

        if (userLikes) { // if true
            throw new Error("You can't like the same article twice!");
        }

        if (username === this.creator) { //if the username is the creator of the article
            throw new Error("You can't like your own articles!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {

        if (this._likes[0] !== username) { //if the username did not like the article initially
            throw new Error("You can't dislike this article!");
        }

        this._likes = this._likes.filter(x => x !== username); //we remove the like from the likes list of the current username article likes

        return `${username} disliked ${this.title}`; //we print the dislike comment
    }

    comment(username, content, id) {
        let comment = this._comments.find(x => x.id === id); //We check and save if we have the given id in our comments

        if (id === undefined || !comment) { // if we do not have the id and there is no such comment
            let newComment = this._comments.length + 1; //We create our new comment

            comment = { //order of the comment submission
                username,
                content,
                id: newComment,
                replies: [],
            };

            this._comments.push(comment); //We add the new comment to our comments array

            return `${username} commented on ${this.title}`;
        }

        if (comment) { //if there is a comment with the given ID
            let repliesCount = comment.replies.length + 1; //we add a reply number to the comment
            let currentReply = `${comment.id}.${repliesCount}`; //the id has a constructed id from the comment

            let newestReply = {
                id: currentReply,
                username,
                content,
            };

            comment.replies.push(newestReply); // we add the new comment to the replies list

            return "You replied successfully"; //if the comment is made successfully
        }
    }

    toString(sortingType) {
        let output = "";
        output += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        if (sortingType === "asc") { //sort comments and replies by id in ascending order
            this._comments = this._comments.sort((a, b) => a.id - b.id);

            for (const com of this._comments) {
                output += `-- ${com.id}. ${com.username}: ${com.content}\n`
                com.replies = com.replies.sort((a, b) => Number((a.id)) - (Number(b.id)));

                for (const reply of com.replies) {
                    output += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                }
            }
        } else if (sortingType === "desc") { //sort comments and replies by id in descending order
            this._comments = this._comments.sort((a, b) => b.id - a.id);

            for (const eachComment of this._comments) {
                output += `-- ${eachComment.id}. ${eachComment.username}: ${eachComment.content}\n`;
                eachComment.replies = eachComment.replies.sort((a, b) => Number((b.id)) - (Number(a.id)));

                for (const reply of eachComment.replies) {
                    output += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                }
            }
        } else { //if the sorting type is by (username) => sort comments and replies by username in ascending order
            this._comments = this._comments.sort((a, b) => a.username.localeCompare(b.username));

            for (const eachComment of this._comments) {
                output += `-- ${eachComment.id}. ${eachComment.username}: ${eachComment.content}\n`;
                eachComment.replies = eachComment.replies.sort((a, b) => a.username.localeCompare(b.username));

                for (const reply of eachComment.replies) {
                    output += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                }
            }
        }

        return output; //may need for judge system .trim();
    }
}

//input
let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

//output
// John likes this article!
// My Article has 0 likes
// Ammy commented on My Article
// You replied successfully

// Title: My Article
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply

// Title: My Article
// Creator: Anny
// Likes: 1
// Comments:
// -- 3. Jessy: Nice :)
// -- 2. Ammy: New Content
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply