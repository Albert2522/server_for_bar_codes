class Upc < ApplicationRecord
  validates :product_name, :upc, presence: true
  validates :upc, uniqueness: true
end
