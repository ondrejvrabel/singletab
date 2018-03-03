var singleTab = {
    checkInterval: 200,
    storage: "singletab-ls",
    interval: 0,
    ignoreDate: 0,
    random: Date.now() + "-" + Math.random().toString(),
    init: function(p) {
        if (typeof(Storage) === "undefined") {
            throw new Exception("Local Storage not supported!");
        }
        localStorage.setItem(this.storage, this.random);
        if (p.interval !== undefined) {
            this.checkInterval = p.interval;
        }

        if (p.storage !== undefined) {
            this.storage = p.storage;
        }

        if (p.fire !== undefined) {
            this.fire = p.fire;
        }

        if (p.ignoreDate !== undefined) {
            this.ignoreDate = p.ignoreDate;
        }

        if (p.multifire !== undefined) {
            this.multifire = p.multifire;
        }
    },
    start: function() {
        this.interval = setInterval("singleTab.check()", this.checkInterval);
    },
    check: function() {
        if (localStorage.getItem(this.storage) != null) {
            if (localStorage.getItem(this.storage) != this.random) {
                if (this.fired == 0) {
                    if (this.ignoreDate == 1 || localStorage.getItem(this.storage).split("-")[0] <= this.random.split("-")[0])
                        this.fire();
                    this.fired = 1;
                }
                this.multifire();
            }
        }
        localStorage.setItem(this.storage, this.random);
    },
    reset: function() {
        this.fired = 0;
    },
    stop: function() {
        clearInterval(this.interval);
    },
    fire: function() {;
    },
    multifire: function() {;
    },
    fired: 0
};
