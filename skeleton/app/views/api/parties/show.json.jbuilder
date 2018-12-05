json.extract! @party, :name

json.set! :guests do
  json.array! @party.guests do |guest|
    json.set! :name, guest.name
    json.set! :gifts do
      json.array! guest.gifts, :title
    end
  end
end