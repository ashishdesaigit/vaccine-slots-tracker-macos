#!/bin/sh

bookingDate="08-05-2021"
res="No Slots Available"
notificationTitle="Vaccine Slot available - Slot available"
while [[ "$res" == "$res" ]]; do
    for pin in 794102 794005 794114
    do
        res=$(node index.js $pin $bookingDate)
        if [ "$res" == "$res" ]; then
        echo "for $pin, $res"
        osascript -e "display notification \"$res\" with title \"$notificationTitle\""
        fi
    done
    sleep 10
done
