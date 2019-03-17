import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
    store: inject(),
    init() {
        this._super(...arguments);

        console.log("game sim...");

        this.seedTeams();   
    },

    seedTeams() {
        let teamNames = ['Manchester United', 'Team 2', 'Team 3', 'Team 4'];

        for(let i=0; i<teamNames.length; i++) {
            this.store.createRecord('team', { id: i, name: teamNames[i] });   // create a model for each of the teams
        }
    }
});
