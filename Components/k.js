import React from 'react'

export function k() {
    const char ='abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890#$%^&*()":<>?'
    let k = "x"

    for (let i = 0; i < 20; i++) {
        k +=  char[Math.floor(Math.random(0) * char.length)]
    }
    return k
}
