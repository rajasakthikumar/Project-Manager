// task status -open, in-progress, peer-review, Resolve conflict, verified


class TaskManager {
    constructor() {
        this.defaultStatus = {
            OPEN : "Open",
            INPROGRESS:"InProgress",
            PEERREVIEW:"PeerReview",
            RESOLVECONFLICT:"ResolveConflict",
            VERIFIED:"Verified"
        }
        this.userDefinedStatus = {}
        this.defaultTransitions = {
            "Open": ["InProgress"],
            "InProgress": ["PeerReview", "ResolveConflict"],
            "PeerReview": ["ResolveConflict", "Verified"],
            "ResolveConflict": ["InProgress", "PeerReview"],
            "Verified": []
        };
        this.customTransistions = {};
        this.defaultTransitionsEnabled = true
    }

    addUserDefinedStatus(name) {
        // Once user defined staus is added, new transistions should be addded, so defaultTransitionsEnabled is set as false here
        if (!name || typeof name != 'string') {
            throw new Error('Invalid Status')
        }
        this.defaultTransitionsEnabled = false
        this.userDefinedStatus[name.toUpperCase()] = name
    }

    getAllStatus() {
        return [...Object.entries(this.defaultStatus),...Object.entries(this.userDefinedStatus)]
    }

    setCustomTransistions(key,value) {
        let allStatues = this.getAllStatus()
        // has objects or dictionaries 
        // check if the key and value are valid statuses then add it
        // Since we will be showing the list of available transistions, should i validate it?

        if(this.validStatus(key) && this.validStatus(value)) {
            if (!this.customTransistions[key]) {
                this.customTransistions[key] = [value]
            } else {
                this.customTransistions[key].push(value)
            }
        }
    }

    getValidTransistion(status) {
    
        if (this.validStatus(status) && !this.defaultTransitionsEnabled) {
            return this.customTransistions[status]
        } else {
            return this.defaultTransitions[status]
        }
    }

    validStatus(status) {
        let inputStatus = status.toUpperCase()
       let allStatues = this.getAllStatus()
       return allStatues.some(([key,value])=> key === inputStatus || value === inputStatus)
    }


    makeTransactions() {

    }
}

module.exports = TaskManager;

