/**
 * Trtl's utility class.
 * Provides support for anything that does NOT need authentication.
 * @type {TurtleUtils}
 * @class
 * @see {@link http://axios-http.com Axios Documentation} for more information about Axios.
 * @see {@link http://socket.io SocketIO Documentation} for more information about SocketIO.
 * @see {@link https://trtl.acaiberii.win/docs/ Trtl Documentation} for more information about Trtl.
 *
 */
export declare class TurtleUtils {
    #private;
    /**
     * Hook code after a function is called. Great for plugins and middlewares.
     * @param {string} method - The name of the method in the class.
     * @param {Function} func - The function's code.
     */
    hookAfter(method: string, funct: Function): void;
    /**
     * Hook code before a function is called. Great for plugins and middlewares.
     * @param {string} method - The name of the method in the class.
     * @param {Function} func - The function's code.
     */
    hookBefore(method: string, funct: Function): void;
    /**
     * Since this does not need authentication or options.
     * Construct the utility class.
     * @constructor
     * @param {string} instance - The instance of Blacket.
     * @returns {TurtleUtils} - The class.
     * @see {@link http://axios-http.com Axios Documentation} for more information about Axios.
     * @see {@link http://socket.io SocketIO Documentation} for more information about SocketIO.
     * @see {@link https://trtl.acaiberii.win/docs/ Trtl Documentation} for more information about Trtl.
     */
    constructor(instance?: string);
    /**
     * Register for a Blacket account.
     * @param {string} username - The user's username.
     * @param {string} password - The user's password.
     * @param {string} accessCode - The access code. Will be removed at a later date (around December 30th).
     * @returns {Promise} - An Axios request to the /logout endpoint.
     * @see {@link http://axios-http.com Axios Documentation} for more information about Axios.
     */
    register(username: string, password: string, accessCode: string): Promise<any>;
    /**
     * **THIS IS IMPORTANT** - DO NOT USE THIS METHOD. This is a stub and will do nothing. Support will be implemented in the future.
     * @param {string} username - The user's username.
     * @param {string} password - The user's password.
     */
    login(username: string, password: string): Promise<any>;
}
//# sourceMappingURL=TurtleUtils.d.ts.map