
const Constants = {};

Constants.DB_SCHEMA = {
  TABLES: {
    USERS: "sys.users",
    COMMUNITIES: "sys.communities",
    POSTS: "sys.posts",
    REPLIES: "sys.replies",
    COMMUNITYUSERS: "sys.communityusers"
  },
  VIEWS: {},
  COLUMNS: {
    USER: ['email', 'LastName', 'FirstName', 'City', 'Country', 'Phone'],
    COMMUNITIES: [`CommunityName`, `ShortDescription`, `CommunityID`, `StartDate`],
    POSTS: [`Title`, `Body`, `CreatedBy`, `ParentCommunity`, `CreatedOn`, `PostID`],
    REPLIES: [`Body`, `CreatedBy`, `ParentPostID`, `CreatedOn`, `ReplyID`, `hasChildren`],
    COMMUNITYUSERS: ['community_user_id', 'community_id', 'user_id'],
  }
}

Constants.INSERT_USER_QUERY = "INSERT INTO " + Constants.DB_SCHEMA.TABLES.USERS + " (email,LastName,FirstName,City,Country,Phone) VALUES(?,?,?,?,?,?)";
Constants.SELECT_ALL_USERS_QUERY = "SELECT * FROM " + Constants.DB_SCHEMA.TABLES.USERS;
Constants.GET_COMMUNITY_FOR_USER = "SELECT CommunityName, CommunityID FROM " + Constants.DB_SCHEMA.TABLES.COMMUNITIES + " WHERE communityID IN (SELECT community_id FROM " + Constants.DB_SCHEMA.TABLES.COMMUNITYUSERS + " WHERE `user_id`=(SELECT UserID from " + Constants.DB_SCHEMA.TABLES.USERS + " WHERE email=?))";
Constants.Get_COMMUNITY = "SELECT * FROM " + Constants.DB_SCHEMA.TABLES.COMMUNITIES + " WHERE CommunityID = ?";
Constants.GET_USER_QUERY = "SELECT * FROM " + Constants.DB_SCHEMA.TABLES.USERS + " WHERE email = ?";
Constants.UPDATE_USER_QUERY = "UPDATE " + Constants.DB_SCHEMA.TABLES.USERS + " SET `LastName`=?,`FirstName`=?,`City`=?,`Country`=?,`Phone`=? WHERE `email`=?";

Constants.USER_EXISTS = { "message": "user exists", "result": true };
Constants.USER_DOES_NOT_EXIST = { "message": "user does not exist", "result": false };


export default Constants;