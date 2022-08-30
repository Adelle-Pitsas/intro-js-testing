class Tweet {
 constructor(user, message, link) {
   this.sender = user
   this.content = message
   if (link === undefined) {
     this.link = 'no link provided'
   } else {
     this.link = link
   }
   this.likes = 0
   this.retweets = 0
   this.replies = []
   this.replyCount = 0
 }
 like() {
   this.likes++
 }
 retweet() {
   this.retweets++
 }
 reply(replyMessage) {
   this.replies.push(replyMessage)
   this.replyCount++
 }
}

module.exports = Tweet;
