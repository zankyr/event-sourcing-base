import * as ItemEvent from "./ItemEvent";
import * as Item from "./Item";
import * as User from "./User";

const log = console.log;

ItemEvent.reset();

log("--- Create events ---");
// Create new users
User.create("shakira@shakira.es", "Shaky");
User.create("piero.pompiero@google,com", "pierpompy");

log("Registered users:", User.getAll());

// Create new items
Item.create("Rolex Daytona", 13000);
Item.create("Omega SpeedMaster", 8000);
Item.create("Casio Twingo", 130);

log("Available items:", Item.getAll());

// Buy items
Item.buy("Casio Twingo", "shakira@shakira.es", 100);
Item.buy("Casio Twingo", "piero.pompiero@google,com", 50);
log("Available items:", Item.getAll());

// Sell items
Item.sell("Casio Twingo", "shakira@shakira.es", 100);
log("Available items:", Item.getAll());

/* ********** Playing with Event Sourcing events ********** */

log("--- Process events ---");

// Rebuild from event log
log("Rebuild accounts from event log", ItemEvent.rebuild());
// assert.deepEqual(Account.get(), accountEvent.rebuild())

// // Undo last event
// log('Undo last event', accountEvent.undo(Account.get(), 1))

// // Undo last two event
// log('Undo last two event', accountEvent.undo(Account.get(), 2))

// // Query first step
// log('Query first step', accountEvent.query(1))

// // Query second step
// log('Query second step', accountEvent.query(2))
