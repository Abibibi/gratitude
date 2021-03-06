export default {
  alreadyAuthenticated: (state, payload) => {
    state.logged = true
    state.firstname = payload.firstname
    state.email = payload.email
  },

  notAuthenticated: (state) => {
    state.logged = false
    state.firstname = ''
    state.email = ''
  },

  registerDone: (state) => {
    state.registerSuccess = true
    state.registerFail = false
  },

  registerFailed: (state) => {
    state.registerFail = true
    state.registerSuccess = false
  },

  loginDone: (state, payload) => {
    state.loginSuccess = true
    state.nonExistingUser = false
    state.wrongPassword = false
    state.logged = true
    state.firstname = payload.firstname
    state.email = payload.email
  },

  loginNonExistingUser: (state) => {
    state.loginSuccess = false
    state.nonExistingUser = true
    state.wrongPassword = false
    state.logged = false
    state.firstname = ''
    state.email = ''
  },

  loginWrongPassword: (state) => {
    state.loginSuccess = false
    state.nonExistingUser = false
    state.wrongPassword = true
    state.logged = false
    state.firstname = ''
    state.email = ''
  },

  newSpaceAdded: (state, payload) => {
    state.spaces = [...state.spaces, { id: payload.id, name: payload.name }]
    state.createdSpace = payload
    state.spaceAlreadyThere = false
  },

  spaceAlreadyExisting: (state) => {
    state.spaceAlreadyThere = true
  },

  spaceAlreadyThereRemoved: (state) => {
    state.spaceAlreadyThere = false
  },

  previouslySubmittedSpaceRemoved: (state) => {
    state.createdSpace = ''
  },

  allSpacesReceived: (state, payload) => {
    state.spaces = payload
  },

  connectedUserSpacesReceived: (state, payload) => {
    state.sessionUserSpaces = payload
  },

  spaceAboutToJoin: (state, payload) => {
    state.spaceToJoin = payload
  },

  spaceJoinedWhenInitiallyLogged: (state, payload) => {
    state.joinedSpace = true
    state.sessionUserSpaces = [...state.sessionUserSpaces, payload]
    state.joiningWhileUnlogged = false
    state.tryToJoin = false
  },

  spaceNotJoinedBecauseUnlogged: (state) => {
    state.joinedSpace = false
    state.joiningWhileUnlogged = true
    state.tryToJoin = true
  },

  spaceJoinedAfterLogin: (state, payload) => {
    state.joinedSpace = false
    state.sessionUserSpaces = [...state.sessionUserSpaces, payload]
    state.joiningWhileUnlogged = false
    state.tryToJoin = true
  },

  tryToJoinFalseAfterConfirmingJoiningSpace: (state) => {
    state.tryToJoin = false
  },

  alreadyJoinedSpaceRemoved: (state) => {
    state.spaceToJoin = ''
  },

  goingToOneSpacePage: (state, payload) => {
    state.space = true
    state.currentSpace = payload
  },

  leavingOneSpacePageWhileLogged: (state) => {
    state.space = false
    state.currentSpace = ''
  },

  oneSpaceMembersReceived: (state, payload) => {
    state.spaceMembers = payload
  },

  messageSent: (state) => {
    state.sendMessageSuccess = true
  },

  messageAlreadySent: (state) => {
    state.sendMessageSuccess = false
  },

  messagesReceivedDisplayed: (state, payload) => {
    state.messagesReceived = true
    state.receivedMessagesContent = payload
    state.messagesSent = false
  },

  messagesSentDisplayed: (state, payload) => {
    state.messagesSent = true
    state.sentMessagesContent = payload
    state.messagesReceived = false
  }
}
