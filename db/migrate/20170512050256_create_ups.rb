class CreateUps < ActiveRecord::Migration[5.0]
  def change
    create_table :upcs do |t|
      t.text :product_name, null: false
      t.text :upc, null: false

      t.timestamps
    end

    add_index :upcs, :upc, unique: true
  end
end
