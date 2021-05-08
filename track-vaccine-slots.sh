#!/bin/sh

bookingDate="08-05-2021"
res="No Slots Available"
notificationTitle="Vaccine Slot available - Slot available"
while [[ "$res" == "$res" ]]; do
    for pin in 411027 411217 411038 792101
    do
        res=$(node index.js $pin $bookingDate)
        if [ "$res" != "No Slots Available" ]; then
        echo "for $pin, $res"
        osascript -e "display notification \"$res\" with title \"$notificationTitle\""
        fi
    done
    sleep 10
done
