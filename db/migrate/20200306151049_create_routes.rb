class CreateRoutes < ActiveRecord::Migration[6.0]
  def change
    create_table :routes do |t|
      t.string :name
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.text :polyline
      t.float :distance
      t.float :elevation

      t.timestamps
    end
  end
end
