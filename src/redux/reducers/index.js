import { combineReducers } from 'redux';
import logs from './logs';
import path from './path';
import settings from "./settings";
import logTypes from "./logTypes";

export default combineReducers({logs, path, settings, logTypes});
