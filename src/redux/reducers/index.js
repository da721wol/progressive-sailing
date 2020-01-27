import { combineReducers } from 'redux';
import logs from './logs';
import path from './path';
import settings from "./settings";

export default combineReducers({logs, path, settings});
