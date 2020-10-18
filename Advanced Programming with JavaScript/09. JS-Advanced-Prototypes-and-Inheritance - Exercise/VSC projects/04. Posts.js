// function solve() {

//     class Post {
//         constructor(title, content) {
//             this.title = title;
//             this.content = content;
//         }

//         toString() {
//             return `Post: ${this.title}\nContent: ${this.content}`;
//         }
//     }

//     class SocialMediaPost extends Post {
//         constructor(title, content, likes, dislikes) {
//             super(title, content);
//             this.likes = likes;
//             this.dislikes = dislikes;
//             this.comments = [];
//         }

//         addComment(comment) {
//             this.comments.push(comment);
//         }

//         toString() {
//             let comments = this.comments.length ? `\nComments:\n${this.comments.map((com) => ` * ${com}`).join("\n")}` : ""; 

//             return `${super.toString()}\nRating: ${this.likes - this.dislikes}${comments}`;
//         }
//     }

//     class BlogPost extends Post {
//         constructor(title, content, views) {
//             super(title, content);
//             this.views = views;
//         }

//         view() {
//             this.views++;

//             return this;
//         }

//         toString() {
//             return `${super.toString()}\nViews: ${this.views}`;
//         }
//     }

//     return {
//         Post,
//         SocialMediaPost,
//         BlogPost,
//     };
// }

function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + "\n"; //we use super instead of this in order to get the initial toString method in our initial class, this-> currentChild, super->ParentClass;
            result = `Rating: ${this.likes - this.dislikes}\n`;

            if (this.comments.length > 0) {
                result += `Comments:\n`;
                this.comments.forEach(comment => result += ` * ${comment}\n`);
            }

            return result; //result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this; // we return the same object in order to be able chain it and to have visiblity to our view
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`; //  return super.toString() + `\nViews: ${this.views}`;

        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}

//input
// let post = new Post("Post", "Content");
// console.log(post.toString());
// // Post: Post
// // Content: Content
// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
// console.log(scm.toString());

//output
// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// //  * Good post
// //  * Very good post
// //  * Wow!