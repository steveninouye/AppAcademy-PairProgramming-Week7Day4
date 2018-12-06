class Api::PokemonController < ApplicationController
  def index
    puts 'hey you hit this'
    @pokemons = Pokemon.all
    render :index
  end
  
  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end
end