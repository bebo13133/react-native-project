
import React from 'react'
import * as WebBrowser from 'expo-web-browser';

export default function useWarmUpBrowser() {
    React.useEffect(() => {
        void WebBrowser.warmUpAsync()
        return () => {
            void WebBrowser.coolDownAsync()
        } // cleanup function
    }, [])
}