import { RequestHandler } from "express";

// https://github.com/textbook/express-msgpack
declare module "express-msgpack" {
	interface Options {
		decoder?: any;
		encoder?: any;
		mimeType?: string;
	}
	export default function msgpack(opts?: Options): RequestHandler;
}
