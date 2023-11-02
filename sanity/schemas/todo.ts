export default {
    name: 'todo',
    title: 'Todo',
    type: 'document',
    fields: [
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        readOnly: true,
        }
      },
      {
        name: 'guestName',
        title: 'Guest Name',
        type: 'string'
      },
      {
        name: 'roomNumber',
        title: 'Room Number',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'complete',
        title: 'Complete',
        type: 'boolean'
      },
      {
        name: 'createdBy',
        title: 'Created By',
        type: 'string',
      },
    ],
    initialValue: {
      complete: false,
      createdAt: (new Date()).toISOString()
    }
  }
  