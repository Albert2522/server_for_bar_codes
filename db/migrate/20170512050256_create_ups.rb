class CreateUps < ActiveRecord::Migration[5.0]
  def change
    create_table :upc do |t|
      t.text :product_name, null: false
      t.text :upc, null: false

      t.timestamps
    end

    add_index :upc, :upc, unique: true
  end
end
