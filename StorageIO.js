"use strict";

    /* @Author: Zakeria Hassan <zak.hassan1010@gmail.com>
     * @Date: Nov. 6, 2013
     * @License: MIT
     * @Purpose:
     * Generally StorageIO uses IndexedDB http://www.w3.org/TR/IndexedDB/.  
     * If IndexedDB isn't isn't supported then it use as an alternative 
     * WebSQL http://www.w3.org/TR/webdatabase/.
     * 
     * The MIT License (MIT)
     * Copyright (c) 2013 Zakeria Hassan
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     *
     */
 var StorageIO = function (e) {
if(global.indexedDB || global.mozIndexedDB || global.webkitIndexedDB || global.msIndexedDB){
  return {
    indexedDB: global.indexedDB || global.mozIndexedDB || global.webkitIndexedDB || global.msIndexedDB,
    IDBTransaction: global.IDBTransaction || global.webkitIDBTransaction || global.msIDBTransaction,
    IDBKeyRange: global.IDBKeyRange || global.webkitIDBKeyRange || global.msIDBKeyRange,
    request: null,
    result: null,
    error: function (event) {
      console.log("request failed!");
    },
    success: function (event) {
      this.result = this.request.result;
    },
    read: function () {},
    write: function () {},
    rm: function () {},
    open: function (dbname) {
      if (this.indexedDB) {
        this.request = this.indexedDB.open(dbname);
        this.request.onerror = this.error;
        this.request.success = this.success;
      }
    }, 
    close: function(){};
  };
} else {
    /*
     * As a fallback solution to acheive cross browser compatibility 
     * I've included a Web SQL Backed solution. 
     */
    return {
        read:function(){},
        write: function () {},
        rm: function () {}
    }
}

};