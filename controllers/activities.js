import { Activity } from "../models/activity.js";

const findActivity = params => {
    return Activity.findOne(params).then(activity => {
        if (!activity) {
            throw new Error('No activities found with the specified parameters');
        }

        return activity;
    });
};

const findRandomActivity = params => {
    return Activity.countDocuments(params).then(count => {
        if (!count || count === 0) throw new Error('No activity found with the specified parameters');

        return Activity.findOne(params).skip(Math.floor(Math.random() * count));
    }).then(activity => {
        if (!activity) throw new Error('No activity found with the specified parameters');

        return activity;
    });
};


export {
  findActivity,
  findRandomActivity
}