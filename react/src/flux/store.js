import {EventEmitter} from "events";
export const store ={
	...{
		item:['vue','react'],
		
	},
	...EventEmitter.prototype
}