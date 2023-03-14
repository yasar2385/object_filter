// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var ROLE_IDS = {
  '5b53536b4c4a803e9a5abf70': {
    name: 'Author',
    SelectorAttribute: 'showForAU',
    Restrict_Selector: 'ForAU',
    shortname: 'AU',
    backup: '5b53536b4c4a803e9a5abf70_AU',
    Stage: 'Proofing',
    next_mail: 'PE_email',
    next_role: 'PE_role',
  },
  '5b534de04c4a803e9a5abf45': {
    name: 'Production Editor',
    SelectorAttribute: 'showForPE',
    Restrict_Selector: 'ForPE',
    shortname: 'PE',
    backup: '5b534de04c4a803e9a5abf45_PE',
    Stage: 'PE Review',
    next_mail: 'collator_email',
    next_role: 'collator_role',
  },
  '5bcf15b1cf510152afba028a': {
    name: 'Collator',
    SelectorAttribute: 'showForCO',
    Restrict_Selector: 'ForCO',
    shortname: 'CO',
    backup: '5bcf15b1cf510152afba028a_CO',
    Stage: 'Collation',
  },
  '5bd1c4e2cf51015102014427': {
    name: 'Copyeditor',
    SelectorAttribute: 'showForCE',
    Restrict_Selector: 'ForCE',
    shortname: 'CE',
    backup: '5bd1c4e2cf51015102014427_CE',
    Stage: 'CE Review',
  },
  '5b534dc54c4a803e9a5abf41': {
    name: 'Project Manager',
    SelectorAttribute: 'showForPM',
    Restrict_Selector: 'ForPM',
    shortname: 'PM',
    backup: '5b534dc54c4a803e9a5abf41_PM',
    Stage: 'PM Review',
  },
  '5b534e334c4a803e9a5abf4c': {
    name: 'Editor',
    SelectorAttribute: 'showForED',
    Restrict_Selector: 'ForED',
    shortname: 'ED',
    backup: '5b534e334c4a803e9a5abf4c_ED',
    Stage: 'ED Review',
  },
  '5b534e5b4c4a803e9a5abf4f': {
    name: 'Journal Manager',
    SelectorAttribute: 'showForJM',
    Restrict_Selector: 'ForJM',
    shortname: 'JM',
    backup: '5b534e5b4c4a803e9a5abf4f_JM',
    Stage: 'JM Review',
  },
  '5bcf11635e7186178a22eee0': {
    name: 'Proofreader',
    SelectorAttribute: 'showForPR',
    Restrict_Selector: 'ForPR',
    shortname: 'PR',
    backup: '5bcf11635e7186178a22eee0_PR',
    Stage: 'Proof Reading',
  },
  XML: 'XML',
  AU: '5b53536b4c4a803e9a5abf70',
  PE: '5b534de04c4a803e9a5abf45',
  CO: '5bcf15b1cf510152afba028a',
  CE: '5bd1c4e2cf51015102014427',
  PM: '5b534dc54c4a803e9a5abf41',
  ED: '5b534e334c4a803e9a5abf4c',
  JM: '5b534e5b4c4a803e9a5abf4f',
  PR: '5bcf11635e7186178a22eee0',
};
var AU_KEY = Object.keys(ROLE_IDS)[0];
var ACTIVE = 'active';
var roles_orders = [
  {
    order: 1,
    role: '5b53536b4c4a803e9a5abf70',
    rolename: 'Author',
    status: {
      $numberLong: '1678725998800',
    },
  },
];
var re = roles_orders.filter((obj) => obj.role == AU_KEY);

console.log(re);
