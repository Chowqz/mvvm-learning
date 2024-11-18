export class Update {
  constructor(payload) {
    this.payload = payload;
  }
}
//数据结构是一个单链表
export class UpdateQueue {
  constructor() {
    this.firstUpdate = null;
    this.lastUpdate = null;
  }
  enqueueUpdate(update) {
    if (this.lastUpdate === null) {
      this.firstUpdate = this.lastUpdate = update;
    } else {
      this.lastUpdate.nextUpdate = update;
      console.log(this.firstUpdate);
      console.log(this.lastUpdate);
      this.lastUpdate = update;
      console.log(this.lastUpdate);
    }
  }
  forceUpdate(state) {
    let currentUpdate = this.firstUpdate;
    while (currentUpdate) {
      let nextState =
        typeof currentUpdate.payload === "function"
          ? currentUpdate.payload(state)
          : currentUpdate.payload;
      state = { ...state, ...nextState };
      currentUpdate = currentUpdate.nextUpdate;
    }
    this.firstUpdate = this.lastUpdate = null;
    return state;
  }
}

const Queue = new UpdateQueue();
Queue.enqueueUpdate(new Update({ num: 1 }));
Queue.enqueueUpdate(new Update({ num: 2 }));
Queue.enqueueUpdate(new Update({ num: 3 }));
Queue.enqueueUpdate(new Update({ num: 4 }));
