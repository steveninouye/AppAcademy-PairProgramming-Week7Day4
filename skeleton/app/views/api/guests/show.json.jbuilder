# json.name @guest.name
# json.age @guest.age
# json.favorite_color @guest.favorite_color
json.extract! @guest, :name, :age, :favorite_color

json.set! :gifts do
  json.array! @guest.gifts, :id, :title, :description, :guest_id
end