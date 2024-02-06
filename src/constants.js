
const Constants = {};

Constants.DB_SCHEMA = {
  TABLES: {
    USERS: "sys.users",
    COMMUNITIES: "sys.communities",
    POSTS: "sys.posts",
    REPLIES: "sys.replies"
  },
  VIEWS: {},
  COLUMNS: {
    USER: ['email', 'LastName', 'FirstName', 'City', 'Country', 'Phone'],
    COMMUNITIES: [`CommunityName`, `ShortDescription`, `CommunityID`, `StartDate`],
    POSTS: [`Title`, `Body`, `CreatedBy`, `ParentCommunity`, `CreatedOn`, `PostID`],
    REPLIES: [`Body`, `CreatedBy`, `ParentPostID`, `CreatedOn`, `ReplyID`, `hasChildren`]
  }
}

Constants.INSERT_USER_QUERY = "INSERT INTO " + Constants.DB_SCHEMA.TABLES.USERS + " (email,LastName,FirstName,City,Country,Phone) VALUES(?,?,?,?,?,?)";
Constants.SELECT_ALL_USERS_QUERY = "SELECT * FROM " + Constants.DB_SCHEMA.TABLES.USERS;


export default Constants;